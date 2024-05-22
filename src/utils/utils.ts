import {EmptyWsResponseDataType, HttpResponseDataType} from "../types/types.ts";

export const createInitValueWsData = (data: HttpResponseDataType) => {
    const result: EmptyWsResponseDataType = {};

    for (const key in data) {
        result[key] = [];
    }

    return result
}