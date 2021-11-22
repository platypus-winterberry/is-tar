"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTar(value, extensionOnly = false) {
    if (extensionOnly) {
        const validator = new RegExp(/^.tar.([gz2xzb]{2,3})$/, 's');
        return validator.test(value);
    }
    const validator = new RegExp(/.tar.([gz2xzb]{2,3})$/, 's');
    return validator.test(value);
}
exports.default = isTar;
