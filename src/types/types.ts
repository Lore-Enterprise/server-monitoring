export type EmptyWsResponseDataType = {
    [key: string]: []
}

export type WsResponseDataType = {
    [key: string]: ContainerType[]
}

export type ContainerType = {
    name: string;
    id: string;
    image: string;
    status: string;
    os: string;
    memory: MemoryType;
    cpu: CPUType;
}

export type MemoryType = {
    usage: number;
    max: number;
}

export type CPUType = {
    usage: number;
    max: number;
}

export type HttpResponseDataType = {
    [key: string]: {
        id: string;
        status: "running" | "exited";
    }
}