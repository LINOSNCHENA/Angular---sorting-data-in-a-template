// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';


// @NgModule({
//   declarations: [],
//   imports: [    CommonModule  ]
// })
// export class UserRoutingModule { }

const routes: Routes = [
  { path: '', component: UserComponent }
];

export const UserRoutes = RouterModule.forChild(routes);