import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { TestComponent } from './components/test/test.component';
import { AgGridModule } from 'ag-grid-angular';
import { SimpleCellRenderer } from './components/content/SimpleCellRenderer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    TestComponent, 
    SimpleCellRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,AgGridModule.withComponents([SimpleCellRenderer])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
