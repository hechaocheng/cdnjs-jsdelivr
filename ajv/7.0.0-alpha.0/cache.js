"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cache {
    constructor() {
        this._cache = {};
    }
    put(key, value) {
        this._cache[key] = value;
    }
    get(key) {
        return this._cache[key];
    }
    del(key) {
        delete this._cache[key];
    }
    clear() {
        this._cache = {};
    }
}
exports.default = Cache;
//# sourceMappingURL=cache.js.map