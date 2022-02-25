// we can directly export like this, cause module.exports is an object
// on which we can set up props
module.exports.items = ['item1', 'item2'];
const person = {
    name: 'Bob',
}

module.exports.singlePerson = person;
