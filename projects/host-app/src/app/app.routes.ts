import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const MFE_CHILD_A_URL = "http://localhost:4300/remoteEntry.js"
const MFE_CHILD_B_URL = "http://localhost:4400/remoteChildEntry.js"
export const routes: Routes = [
    { path: 'home', component: HomeComponent },  
    // { path: 'about', component: AboutComponent },  
    // { path: 'contact', component: ContactUsComponent },  

    { path: 'about', 
        loadChildren:()=>{
            return loadRemoteModule({
                remoteEntry : MFE_CHILD_A_URL, // remote entry url
                remoteName:"childAppA", //child app name
                exposedModule:"./AboutModule"
            }).then(m =>{ return m.AboutModule})
              .catch((err)=>console.log(err,"FROM ERR 1"))
        }
     },  
    { path: 'contact', 
        loadChildren:()=>{
            return loadRemoteModule({
                remoteEntry : MFE_CHILD_B_URL, // remote entry url
                remoteName:"childAppB", //child app name
                exposedModule:"./ContactUsModule"
            }).then(m =>{return m.ContactUsModule})
              .catch((err)=>console.log(err,"FROM ERR 2"))
        }
     }, 
];
