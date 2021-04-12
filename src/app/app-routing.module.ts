import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddeventComponent } from './addevent/addevent.component';
import { CrudComponent } from './crud/crud.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';

const routes: Routes = [{path:'events',component:EventListComponent},{path:'about',component:AboutComponent},{path:'',component:HomeComponent},{path:'login',component:LoginComponent},{path:'crud',component:CrudComponent},{path:'updateevent/:id',component:UpdateeventComponent},{path:'addevent',component:AddeventComponent},{path:'events/:id',component:ReadmoreComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
