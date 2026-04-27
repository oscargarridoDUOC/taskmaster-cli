const { readTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TastMaster CLI - usa: node index.js <comando>');
}
