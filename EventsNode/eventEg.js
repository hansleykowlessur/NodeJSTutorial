// E.g. Receive request from a port, HTTP raises an event.

// Captial first letter to specify class 
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Raise an event => emitter.emit('nameOfEvent'); => nothing won't happen unless it is registered

// Register a listener
// emitter.addListener() OR
emitter.on('messageLogged', () => {
    console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');

// NOTE: order matters as events are checked synchronously.

// EventArguments
// Raise an event with arguments, E.g. an URL or any values by using an Object.

emitter.emit('messageLoggedArg', { id: 1, url: 'https://'});

emitter.on('messageLoggedArg', (e) => {
    console.log(`ID of event : ${e.id} and url of event : ${e.url}`);
});

/*
    Each module if implments their own emitter, 
    trying to add this particular event using (on or addEventListener) in another module won't work
    Check Logger with event on how to do it.
*/
