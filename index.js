import init from './src/init.js';
import send from './src/send.js';
import reply from './src/reply.js';
import load from './src/load.js';
import oninput from './src/oninput.js';
import _delete from './src/delete.js';
window.detalk = {
    init,
    send,
    reply,
    load,
    oninput,
    delete: _delete,
};