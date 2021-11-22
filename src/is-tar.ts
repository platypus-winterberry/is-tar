function isTar(value: string, extensionOnly: boolean = false): boolean {
    if (extensionOnly) {
        const validator = new RegExp(/^.tar.([gz2xzb]{2,3})$/, 's');
        return validator.test(value);
    }
    const validator = new RegExp(/.tar.([gz2xzb]{2,3})$/, 's');
    return validator.test(value);
}

export default isTar;
