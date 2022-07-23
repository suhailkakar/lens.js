// export { default as ping } from './queries/ping';

import { defaultProfile } from './queries/profile';

defaultProfile('0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3').then(console.log).catch(console.error);
