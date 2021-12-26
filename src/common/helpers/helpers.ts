import {mapKeys, snakeCase} from "lodash";

export const keysToSnakeCase = (params) => {
    return mapKeys(params, (value, key) => {
        return snakeCase(key);
    });
};
