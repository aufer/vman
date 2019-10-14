import { Member } from '@vereinsmanager/api/lib';

export const all: Member[] = [
  <Member>{
    id: '00001',
    firstName: 'Andre',
    lastName: 'Ufer',
    email: 'andre.ufer@web.de',
    mobileNumber: '01738928305',
    address: {
      street: 'Wiesenweg',
      houseNumber: '63',
      zipCode: '71696',
      city: 'Möglingen',
    },
  },
  <Member>{
    id: '00002',
    firstName: 'Craig',
    lastName: 'Buchanan',
    email: 'craig.buchanan@net.nz',
    mobileNumber: '01738928301',
    address: {
      street: 'Washington Ring',
      houseNumber: '12',
      zipCode: '43109',
      city: 'Köln',
    },
  },
];
