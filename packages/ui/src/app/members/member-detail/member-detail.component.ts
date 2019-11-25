import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '@vereinsmanager/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formGroupFrom } from '../../utils/form-helper';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { createMember, updateMember } from '../members.actions';
import { MembersState } from '../members.reducer';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<{members: MembersState}>, private fb: FormBuilder) {
    this.form = formGroupFrom(new Member(), fb);
  }

  async ngOnInit() {
    const memberId = this.route.snapshot.params.id;
    if (!memberId) return;
    const members = await this.store.select(s => s.members.all).pipe(take(1)).toPromise();
    if (!members) return;
    this.member = members.find(s => s.id === memberId);
    this.form.patchValue(this.member);
  }

  saveChanges() {
    const updateAction = this.form.value.id ? updateMember : createMember;
    this.store.dispatch(updateMember({member: this.form.value}));
    this.router.navigate(['/']);
  }
}
