"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1.company.companyName();
        this.catchPhrase = faker_1.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.address.latitude()),
            lng: parseFloat(faker_1.address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "\n        <div>\n            <h1>Company Name ".concat(this.companyName, "<h1>\n            <h3>Catch Phrase ").concat(this.catchPhrase, "<h3>\n        </div>\n        ");
    };
    return Company;
}());
exports.Company = Company;
