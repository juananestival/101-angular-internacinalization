import { LOCALE_ID, NgModule, APP_INITIALIZER,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { SampleComponentComponent } from './component/sample-component/sample-component.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SampleComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
