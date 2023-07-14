import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PackageComponent } from './package/package.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { RegisternowComponent } from './registernow/registernow.component';
import { ExclusivedealsComponent } from './exclusivedeals/exclusivedeals.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"book",
    component:BookComponent
  },
  {
    path:"package",
    component:PackageComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
     path:"about",
     component:AboutComponent
  },
  {
    path:"dialog",
    component:DialogboxComponent
  },
  {
    path:"register",
    component:RegisternowComponent
  },
  {
    path:"exclusive",
    component:ExclusivedealsComponent
  },
  {
    path:"admin",
    component:AdmindashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
