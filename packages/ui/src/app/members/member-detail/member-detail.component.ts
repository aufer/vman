import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '@vereinsmanager/api';
import { MembersService } from '../members.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private membersSvc: MembersService, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        houseNumber: [''],
        zipCode: [''],
        city: [''],
      }),
      email: [''],
      mobileNumber: [''],
    });
  }

  async ngOnInit() {
    const memberId = this.route.snapshot.params.id;
    if (!memberId) return;
    this.member = await this.membersSvc.getById(memberId);
    console.log('Got member', this.member);
    this.form.setValue(this.member);
  }
}
