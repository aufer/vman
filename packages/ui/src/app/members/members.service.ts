import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EntityService } from '../entity.service';
import { Member } from '@vereinsmanager/api';

@Injectable()
export class MembersService extends EntityService<Member> {
  protected endpoint = 'http://localhost:3000/members';

  constructor(protected http: HttpClient) {
    super(http);
  }

  getAll() {
    return this.http.get(this.endpoint).pipe(map(this.responseHandler));
  }

  getById(id: string) {
    return this.http.get(this.endpoint + '/' + id).pipe(map(this.responseHandler));
  }

  delete(id: string) {
    this.http.delete(this.endpoint + '/' + id).pipe(map(this.responseHandler));
  }

  add(member: Member) {
    this.http.post(this.endpoint, member).pipe(map(this.responseHandler));
  }

  update(member: Member) {
    return this.http.put(this.endpoint + '/' + member.id, member).pipe(map(this.responseHandler));
  }

  private responseHandler = res => {
    console.log('RESPONSE_HANDLER', res);
    if (res && res.err) {
      throw new Error(`Error calling ${this.endpoint}`);
    }

    return res.data;
  }
}
