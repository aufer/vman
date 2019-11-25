import { createReducer, on } from '@ngrx/store';
import { loadMembers, loadMembersSuccess } from './members.actions';
import { Member } from '@vereinsmanager/api';

export type MembersState = {all: Member[]};

const initialState: MembersState = {
  all: [],
};

export const membersReducer = createReducer(initialState,
  on(loadMembers, state => state),
  on(loadMembersSuccess, (state, action) => {
    console.log({state, action});
    return {...state, all: action.members};
  }),
);
