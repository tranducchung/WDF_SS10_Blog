import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BolgEditComponent} from './bolg-edit/bolg-edit.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'blog/:id/edit',
    component: BolgEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
