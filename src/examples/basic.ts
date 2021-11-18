import {isTar} from  '../index';

const validFileName = isTar(".tar.gz", 'extension');

console.log(validFileName);