import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthGuard } from './auth/auth.guard';
import { TodoComponentComponent } from './pages/todo/todo-component/todo-component.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todo',
    component: TodoComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weather',
    component: WeatherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
