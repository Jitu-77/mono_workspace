import { Routes } from '@angular/router';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path:'',redirectTo:'/contact',pathMatch:'full'},
    {path:'contact',component:ContactUsComponent},

];
