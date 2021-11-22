import {isTar} from  '../index';

const validFileName     = isTar("fds.tar.gz");                          // true
const invalidFileName   = isTar("fds.tar.gz", true);                    // false
const validExtension    = isTar(".tar.gz");                             // true

