import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);

}

function goodbyeHandler() {
    console.log('Goodbye World')
}

//register event emitters
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye')

//error handling
myEmitter.on('error', (err) => {
    console.log('an error occured', err)
});

//simulate the error
myEmitter.emit('error', new Error('something went wrong'))
