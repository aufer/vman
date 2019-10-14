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

  async getAll() {
    return await this.http.get(this.endpoint).pipe(map(this.responseHandler)).toPromise();
  }

  async getById(id: string) {
    return await this.http.get(this.endpoint + '/' + id).pipe(map(this.responseHandler)).toPromise();
  }

  async delete(id: string) {
    await this.http.delete(this.endpoint + '/' + id).pipe(map(this.responseHandler)).toPromise();
  }

  async update(member: Member) {
    await this.http.put(this.endpoint + '/' + member.id, member).pipe(map(this.responseHandler)).toPromise();
  }

  private responseHandler = res => {
    if (res.err) {
      throw new Error(`Error calling ${this.endpoint}`);
    }

    return res.data;
  }
}
