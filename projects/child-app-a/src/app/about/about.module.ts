import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule.forChild([ 
      {
        path:'',
        component:AboutComponent
      }
    ])
  ]
})
export class AboutModule { }
