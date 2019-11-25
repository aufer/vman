import { createAction, props } from '@ngrx/store';
import { Member } from '@vereinsmanager/api';

export const loadMembers = createAction(
  'MEMBERS:LOAD_ALL'
);
export const loadMembersSuccess = createAction(
  'MEMBERS:LOAD_ALL:SUCCESS',
  props<{ members: Member[] }>(),
);

export const loadOneMember = createAction(
  'MEMBERS:LOAD_ONE',
  props<{ member: Member }>(),
);
export const loadOneMemberSuccess = createAction(
  'MEMBERS:LOAD_ONE:SUCCESS',
  props<{ member: Member }>(),
);

export const updateMember = createAction(
  'MEMBERS:UPDATE_ONE',
  props<{ member: Member }>(),
);
export const updateMemberSuccess = createAction(
  'MEMBERS:UPDATE_ONE_SUCCESS',
);

export const createMember = createAction(
  'MEMBERS:CREATE_ONE',
  props<{ member: Member }>(),
);

export const createMemberSuccess = createAction(
  'MEMBERS:CREATE_ONE',
  props<{ member: Member }>(),
);


export const deleteMember = createAction(
  'MEMBERS:DELETE_ONE',
  props<{ member: Member }>(),
);

export const deleteMemberSuccess = createAction(
  'MEMBERS:DELETE_ONE:SUCCESS',
);

