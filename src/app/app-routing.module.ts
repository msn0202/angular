import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contact',component:ContactComponent},
{path:'service',component:ServiceComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
