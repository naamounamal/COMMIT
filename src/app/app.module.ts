import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';

import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { FadherComponentComponent } from './fadher-component/fadher-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    
    TwoWayDataBindingComponent,
    
    
    FadherComponentComponent,
    
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
