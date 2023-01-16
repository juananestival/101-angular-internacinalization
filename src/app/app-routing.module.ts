import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent} from './screens/home-screen/home-screen.component'

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
