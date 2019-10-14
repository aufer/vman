"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_model_1 = require("./address.model");
var bank_account_model_1 = require("./bank-account.model");
var Member = /** @class */ (function () {
    function Member(id, firstName, lastName, address, phoneNumber, mobileNumber, email, birthday, bankAccount, entryAt, yearlyFee, canceledAt) {
        if (address === void 0) { address = new address_model_1.Address(); }
        if (bankAccount === void 0) { bankAccount = new bank_account_model_1.BankAccount(); }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.birthday = birthday;
        this.bankAccount = bankAccount;
        this.entryAt = entryAt;
        this.yearlyFee = yearlyFee;
        this.canceledAt = canceledAt;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.model.js.map