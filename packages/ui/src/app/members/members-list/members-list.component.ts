import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '@vereinsmanager/api';
import { Store } from '@ngrx/store';
import { deleteMember, loadMembers } from '../members.actions';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MembersState } from '../members.reducer';

@Component({
  selector: 'app-members-list-component',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  members$: Observable<Member[]> = this.store.pipe(tap(s => console.log('LIST', s)), map(s => s.members.all));

  constructor(private store: Store<{members: MembersState}>, private router: Router) {
    store.dispatch(loadMembers());
  }

  async ngOnInit() {
  }

  edit(member: Member) {
    this.router.navigate(['members', member.id]);
  }

  delete(member: Member) {
    this.store.dispatch(deleteMember({member}));
  }
}
