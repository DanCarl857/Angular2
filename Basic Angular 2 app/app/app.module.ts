import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';

import { AppComponent }    from './app.component';
import { Router1Component }  from './Router1.component';
import { Router2Component }    from './Router2.component';

@NgModule({
  imports: [
        BrowserModule ,
        RouterModule.forRoot([
  //       { path: '/', component: AppComponent },
         { path: 'Router1', component: Router1Component },
         { path: 'Router2', component: Router2Component }
       ])
   ],
  declarations: [
        AppComponent,
        Router1Component,
        Router2Component,
         ],
  bootstrap:   [ AppComponent ]
})
export class AppModule { }
