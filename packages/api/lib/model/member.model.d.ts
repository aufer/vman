import { Address } from './address.model';
import { BankAccount } from './bank-account.model';
export interface Member {
    id?: string;
    firstName: string;
    lastName: string;
    address: Address;
    phoneNumber: string;
    mobileNumber: string;
    email: string;
    birthday: string;
    bankAccount: BankAccount;
    entry: Date;
    yearlyFee: number;
    canceledAt: Date;
}
