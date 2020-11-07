import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutes } from './user-routing.module';
import { Search1Component } from '../search1/search1.component';
import { FilterPipe1 } from 'src/app/pipe/filter1.pipe';
import { FilterPipe2 } from 'src/app/pipe/filter2.pipe';
import { Userlist2Component } from './userlist2/userlist2.component';
import { Search2Component } from '../search2/search2.component';
import { Userlist1Component } from './userlist1/userlist1.component';
import { DevicesService } from 'src/app/services/device';
import { AdminsService } from 'src/app/services/admin';

@NgModule({
  declarations: [UserComponent,
    Search1Component,
    Search2Component,
    FilterPipe1,
    FilterPipe2,
    Userlist1Component,
    Userlist2Component,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserRoutes],
  providers: [DevicesService, AdminsService],
})
export class UserModule { }
