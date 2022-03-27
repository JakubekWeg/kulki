"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this.eventListeners = new Map();
    }
    addEventListener(type, callback) {
        console.assert(!!callback);
        const list = this.eventListeners.get(type);
        if (list)
            list.add(callback);
        else
            this.eventListeners.set(type, new Set([callback]));
    }
    emit(type, extra = undefined) {
        const list = this.eventListeners.get(type);
        if (list)
            for (const listener of list.values())
                listener(extra);
    }
}
exports.EventEmitter = EventEmitter;
exports.default = EventEmitter;
