"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.latitude())
        };
    }
    User.prototype.markerContent = function () {
        return "User Name: ".concat(this.name);
    };
    return User;
}());
exports.User = User;
