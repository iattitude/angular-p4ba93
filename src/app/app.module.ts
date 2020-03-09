import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { WorkbenchCComponent } from './workbenchc/workbenchc.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PanelComponent, WorkbenchComponent,WorkbenchCComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
