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

export const formatBytes = (bytes: number, divider: number): {value: number, unit: string} => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return {value: 0, unit: 'Bytes'};

    // Calculate the power by which 1024 must be raised to obtain the correct unit of measurement.
    const i = Math.floor(Math.log(bytes) / Math.log(divider));

    // Divide the number of bytes by the appropriate power of 1024 and round to two decimal places.
    const convertedValue = parseFloat((bytes / Math.pow(divider, i)).toFixed(2));

    return {value: convertedValue, unit: units[i]};
}