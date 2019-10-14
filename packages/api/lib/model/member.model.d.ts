import { Address } from './address.model';
import { BankAccount } from './bank-account.model';
export declare class Member {
    id?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    address: Address;
    phoneNumber?: string | undefined;
    mobileNumber?: string | undefined;
    email?: string | undefined;
    birthday?: string | undefined;
    bankAccount: BankAccount;
    entryAt?: Date | undefined;
    yearlyFee?: number | undefined;
    canceledAt?: Date | undefined;
    constructor(id?: string | undefined, firstName?: string | undefined, lastName?: string | undefined, address?: Address, phoneNumber?: string | undefined, mobileNumber?: string | undefined, email?: string | undefined, birthday?: string | undefined, bankAccount?: BankAccount, entryAt?: Date | undefined, yearlyFee?: number | undefined, canceledAt?: Date | undefined);
}
