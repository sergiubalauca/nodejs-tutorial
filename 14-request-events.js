const EventEmitter = require('events');
//to create a custom emitter we need to extend the EventEmitter class or create the instance to emit or listen for an event
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data received: ${name} - ${id}`);
});
customEmitter.on('response', () => {
    console.log(`Some other response`);
});

// 1. emit and on need to follow the same event name
// 2. order of on and emit matter
// 3. we can add multiple on() listeners
// 4. we can pass args - John, 34 as name and id
customEmitter.emit('response', 'John', 34);
