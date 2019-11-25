import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMembers, loadMembersSuccess, updateMember, updateMemberSuccess } from './members.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MembersService } from './members.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class LoadMembersEffect {

  loadMembers$ = createEffect(() => this.actions$.pipe(
    ofType(loadMembers),
    mergeMap(() => this.membersSvc.getAll()
      .pipe(
        map(members => ({ type: loadMembersSuccess.type, members })),
        catchError(() => EMPTY),
      )),
  ));

  updateMember$ = createEffect(() => this.actions$.pipe(
    ofType(updateMember),
    mergeMap(action => this.membersSvc.update(action.member)
      .pipe(
        map(() => ({ type: updateMemberSuccess.type })),
        catchError(() => EMPTY),
      )),
  ));

  constructor(
    private actions$: Actions,
    private membersSvc: MembersService,
  ) {
  }
}
