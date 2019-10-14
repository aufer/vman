"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var User = /** @class */ (function () {
    function User(id, givenName, familyName, email, role, createdAt, updatedAt, picture) {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map