enum InputOptions {
    FILE = 'file',
    PATH = 'path',
    EXTENSION = 'extension',
    AUTO = 'auto'
};

type StrictMode = Parameters<(strictInputType: InputOptions) => boolean>;

type MultipleStrictMode = Parameters<(strictInputTypes: InputOptions[]) => boolean>;

type None = Parameters<() => boolean>;

type ArgumentsOptions = None | StrictMode | MultipleStrictMode

function isTar(value: string, ...args: ArgumentsOptions): boolean {
    if (args[0] === InputOptions.EXTENSION) {
        const validator = new RegExp(/^.tar.([gz2xzb]{2,3})$/, 's');
        return validator.test(value);
    }
    const validator = new RegExp(/.tar.([gz2xzb]{2,3})$/, 's');
    return validator.test(value);
}

export default isTar
