require('../src/db/mongoose');
const User = require('../src/models/user');

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('607f34d55070af1ba4015393', 21).then(count => {
    console.log(count);
}).catch(e => {
    console.error(e);
})