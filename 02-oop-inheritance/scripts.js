class EventEmitter {
    constructor () {
        this.events = {};
    }
    on(eventName, listener){
        if (this.events[eventName] = this.events[eventName]) {
            this.events[eventName].push(listener);}
    }
    emit(eventName) {
        let event = this.events[eventName];
        if (event) {
            event.forEach(function(fn){
                fn(eventName);
            })
        }
    }
    off(eventName) {
        this.events.delete(eventName);
    }
}

class Movie extends EventEmitter {
    constructor (title, year, duration){
        super ();
        this.title = title,
        this.year = year,
        this.duration = duration;
        this.cast = [];
    }

    play(){
    this.emit('play');
    }

    pause(){
    this.emit('pause');
    }

    resume(){
    this.emit('resume');
    }

    addCast(actor) {
        this.cast = this.cast.concat(actor);
    }

}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Logger{
    log (info){
        console.log('The '+ info +' event has been emited');
    }
}

let social = {
    share: (friendName) => {
        console.log('Share '+ this.title +' with'+ friendName +'.');
    },
    like: (friendName) => {
        console.log(friendName +'likes'+ this.title + '.');
    } 
}

let logger = new Logger();
let harryPotter = new Movie('Harry Potter y la Piedra Filosofal', 2000, 120);
let newActor = new Actor('Daniel Radcliffe', 28);
let otherCast = [
    new Actor('Rupert Grint', 27),
    new Actor('Emma Watson', 29),
]

Object.assign(harryPotter, social);

harryPotter.on('play', logger.log);

harryPotter.addCast(newActor);
harryPotter.addCast(otherCast);

console.log(harryPotter.cast[0].name);

