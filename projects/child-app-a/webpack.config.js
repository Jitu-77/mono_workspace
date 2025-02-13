const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "childAppA",
    publicPath: "auto",
    scriptType:"text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        // library: { type: "module" },

        // For remotes (please adjust)
        name: "childAppA", //name of child app 
        filename: "remoteEntry.js", //default name and can be changed
        exposes: {
            './AboutModule': './projects/child-app-a/src/app/about/about.module.ts',
        }, //the about us gets exposed in the name remoteEntry.js

        // For hosts (please adjust)
        // remotes: { //when we share with others
            // "hostApp": "http://localhost:4200/remoteEntry.js",
            // "childAppB": "http://localhost:4200/remoteEntry.js",

        // },

        shared: share({ // common library
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
