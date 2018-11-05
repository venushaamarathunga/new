import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { OwnerListComponent } from './components/owner/owner-list/owner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    OwnerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'owner', loadChildren: "./components/owner/owner.module#OwnerModule" },
    ])
  ],
  providers: [EnvironmentUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
