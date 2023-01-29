import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralComponent } from './structural/structural.component';
import { HideAfterDirective } from './directives/hide-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    HideAfterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
