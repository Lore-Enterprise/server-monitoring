import {EmptyWsResponseDataType, HttpResponseDataType} from "../types/types.ts";

export const createInitValueWsData = (data: HttpResponseDataType) => {
    const result: EmptyWsResponseDataType = {};

    for (const key in data) {
        result[key] = [];
    }

    return result
}

export const formatBits = (bits: number): string => {
    const units = ['bits', 'Bytes', 'KB', 'MB', 'GB', 'TB'];
    let value = bits;
    // Index of the current unit of measurement, starting from bits
    let unitIndex = 0;

    // The while loop divides value by 8 (to convert to bytes) or by 1024 (to convert to large units)
    // until the value is less than 1024 or until the last one is reached.
    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= (unitIndex === 0) ? 8 : 1024;
        unitIndex++;
    }

    return `${value.toFixed(2)} ${units[unitIndex]}`;
}