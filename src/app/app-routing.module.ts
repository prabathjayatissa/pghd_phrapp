import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DashboardComponent } from './dashboard/dashboard.component'
import { DeviceDataComponent } from './device-data/device-data.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'device-data/:type', component: DeviceDataComponent },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}