import {HttpResponseDataType, WsResponseDataType} from "../types/types.ts";

export const createInitValueWsData = (data: HttpResponseDataType[]) => {
    const result: WsResponseDataType = {};

    for (const value of data) {
        result[value.Names[0]] = [];
    }

    return result
}

export const getContainersId = (data: HttpResponseDataType[]) => {
    const result: string[] = [];

    for (const value of data) {
        result.push(value.Id)
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

export const formatBytes = (bytes: number): string => {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';

    // Calculate the power by which 1024 must be raised to obtain the correct unit of measurement.
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    // Divide the number of bytes by the appropriate power of 1024 and round to two decimal places.
    const convertedValue = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));

    return `${convertedValue} ${units[i]}`;
}