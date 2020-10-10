import { SchemaEnv } from "./compile";
import { CacheInterface } from "./types";
export default class Cache implements CacheInterface {
    private _cache;
    constructor();
    put(key: string, value: SchemaEnv): void;
    get(key: string): SchemaEnv | undefined;
    del(key: string): void;
    clear(): void;
}
