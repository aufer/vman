import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersService } from './members.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '../forms/forms.module';
import { EffectsModule } from '@ngrx/effects';
import { LoadMembersEffect } from './members.effects';
import { StoreModule } from '@ngrx/store';
import { membersReducer } from './members.reducer';

const routes: Routes = [
  { path: '', component: MembersListComponent },
  { path: 'new', component: MemberDetailComponent },
  { path: ':id', component: MemberDetailComponent },
];

@NgModule({
  declarations: [MembersListComponent, MemberDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('members', membersReducer),
    EffectsModule.forFeature([LoadMembersEffect]),
    FormsModule,
  ],
  providers: [
    MembersService,
  ],
  exports: [MembersListComponent],
})
export class MembersModule {
}
