import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { ProfilesService } from './profiles.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes =
  [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'tools',
      component: ToolsComponent
    },
    {
      path: 'profiles',
      component: ProfilesComponent
    },
    {
      path: 'profiles/:id',
      component: ProfileComponent
    },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    ProfilesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
