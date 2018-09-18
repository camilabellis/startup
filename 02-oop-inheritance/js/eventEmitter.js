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