import {Address} from './address.model';
import {BankAccount} from './bank-account.model';

export class Member {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public address: Address,
        public phoneNumber: string,
        public mobileNumber: string,
        public email: string,
        public birthday: string,
        public bankAccount: BankAccount,
        public entry: Date,
        public yearlyFee: number,
        public canceledAt: Date,
    ) {}
}
