import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinnersService } from 'src/app/services/dinners.service';
import { SearchComponent } from '../search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';
import { FilterpipePipe } from 'src/app/pipe/filterpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutes } from './user-routing.module';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { Search1Component } from '../search1/search1.component';
import { UserList1Component } from './user-list1/user-list1.component';

@NgModule({
  declarations: [UserComponent,
    SearchComponent,
    Search1Component,   
    FilterPipe,
    FilterpipePipe,
    UserListComponent,
    UserList1Component,
  
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserRoutes],
  providers: [DinnersService],
})
export class UserModule { }
