import * as u from 'util';

const g: any = global;
const w: any = window;
g.TextDecoder = g.TextDecoder || w.TextDecoder || u.TextDecoder;
g.TextEncoder = g.TextEncoder || w.TextEncoder || u.TextEncoder;
