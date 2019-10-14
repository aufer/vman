import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '@vereinsmanager/api';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members-list-component',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  members: Member[];

  constructor(private membersSvc: MembersService, private router: Router) {}

  async ngOnInit() {
    this.members = await this.membersSvc.getAll();
  }

  edit(member: Member) {
    this.router.navigate(['members', member.id]);
  }

  delete(member: Member) {
    this.membersSvc.delete(member.id);
  }
}
