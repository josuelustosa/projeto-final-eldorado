import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
