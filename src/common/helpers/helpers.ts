import mapKeys from "lodash/mapKeys";
import snakeCase from "lodash/snakeCase";
import {sha1} from "object-hash";

export async function waitForFollozeScriptsToLoad(): Promise<boolean> {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            throw new Error("can't load folloze scripts for more than a minute!");
        }, 60 * 1000);
        const interval = setInterval(() => {
            if (window["follozeScriptsLoaded"]) {
                clearTimeout(timeout);
                clearInterval(interval);
                resolve(true);
            }
        }, 10);
    });
}

export const keysToSnakeCase = params => {
    return mapKeys(params, (value, key) => {
        return snakeCase(key);
    });
};

export type FileUploadParams = {
    url: string;
    headers?: Record<string, string>;
    data?: Record<string, any>;
    method?: string;
};

export function fileUpload(
    file: File,
    params: FileUploadParams,
    progressCallback: (file: File, n: number) => any,
): Promise<any> {
    return new Promise((resolve, reject) => {
        const url = params.url;
        const headers = params.headers;
        const data = params.data;
        const method = params.method || "POST";
        let payload = file;

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (headers) {
            for (const key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }

        if (data) {
            const formData = new FormData();
            formData.append("file", file);
            for (const key in data) {
                formData.append(key, data[key]);
            }
            // @ts-ignore
            payload = formData;
        }

        xhr.onloadstart = function () {
            progressCallback(file, 0);
        };

        xhr.onload = function () {
            if (xhr.status == 200 || xhr.status == 201) {
                const response = xhr.responseText && JSON.parse(xhr.responseText);
                progressCallback(file, 100);
                resolve(response);
            } else {
                reject("did not receive server conformation for upload i.e: status 200 or 201");
            }
        };

        xhr.onerror = function (e) {
            reject(e);
        };

        xhr.upload.onprogress = function (evt) {
            if (evt.lengthComputable) {
                const percent = Math.floor((100 * evt.loaded) / evt.total);
                progressCallback(file, percent);
            }
        };

        xhr.send(payload);
    });
}

export function isObjsEqual(obj1: any, obj2: any) {
    if (obj1 === obj2) {
        return true;
    }
    if (!obj1 || !obj2) {
        return false;
    }
    return sha1(obj1) === sha1(obj2);

    // todo: (tech-debt) this is not deterministic solution (i.e json-stringify-deterministic)
    // return JSON.stringify(obj1) !== JSON.stringify(obj2);
}

export function hashObj(obj: any) {
    return sha1(obj);
}

export function simpleDebounce(callback: CallableFunction, delay: number = 500) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

export function simpleThrottle(callback: CallableFunction, delay: number = 500) {
    let pause = false;
    let waitingArgs;

    const timeoutFunc = () => {
        if (waitingArgs === null) {
            pause = false;
        } else {
            callback(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };

    return (...args) => {
        if (pause) {
            waitingArgs = args;
            return;
        }
        callback(...args);
        pause = true;
        setTimeout(timeoutFunc, delay);
    };
}

export type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

export type DotNestedKeys<T> = (
    T extends Array<infer E>
        ? "" | `${number}` | `${number}.${DotNestedKeys<E>}`
        : T extends object
        ? "" | {[K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`}[Exclude<keyof T, symbol>]
        : ""
) extends infer D
    ? Extract<D, string>
    : never;

export function isInDesigner(): boolean {
    return window["board"]?.classList.contains("designer");
}

export function isInPreview(): boolean {
    return window["board"]?.classList.contains("preview");
}

export function getBoardId(): number {
    const id = window["FollozeState"].initialState?.board?.id;
    if (!id) {
        throw new Error("board id not found");
    }
    return id;
}
