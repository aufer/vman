"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Member = /** @class */ (function () {
    function Member(id, firstName, lastName, address, phoneNumber, mobileNumber, email, birthday, bankAccount, entry, yearlyFee, canceledAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.birthday = birthday;
        this.bankAccount = bankAccount;
        this.entry = entry;
        this.yearlyFee = yearlyFee;
        this.canceledAt = canceledAt;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.model.js.map