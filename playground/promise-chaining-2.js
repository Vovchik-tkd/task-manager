require('../src/db/mongoose');
const Task = require('../src/models/task');

deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments( {completed: false});
    return count;
}

deleteTaskAndCount('608131c7955a572b1df61fe7').then(count => {
    console.log(count);
}).catch(e => {
    console.error(`Error: ${e.message}`);
})