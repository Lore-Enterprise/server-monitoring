//--- WsResponseDataType---------------------------------------------
export type WsResponseDataType = {
    [key: string]: ContainerType[]
}

export type ContainerType = {
    read: string;
    preread: string;
    pids_stats: {
        current?: number;
    };
    blkio_stats: BlkioStats;
    num_procs: number;
    storage_stats: Record<string, any>;
    cpu_stats: CpuStats;
    precpu_stats: CpuStats;
    memory_stats: MemoryStats;
    name: string;
    id: string;
    networks?: {
        eth0?: NetworkStats;
    };
    keyId: string;
}

type BlkioStats = {
    io_service_bytes_recursive: any[] | null;
    io_serviced_recursive: any[] | null;
    io_queue_recursive: any[] | null;
    io_service_time_recursive: any[] | null;
    io_wait_time_recursive: any[] | null;
    io_merged_recursive: any[] | null;
    io_time_recursive: any[] | null;
    sectors_recursive: any[] | null;
}

type CpuStats = {
    cpu_usage: {
        total_usage: number;
        percpu_usage?: number[];
        usage_in_kernelmode: number;
        usage_in_usermode: number;
    };
    system_cpu_usage?: number;
    online_cpus?: number;
    throttling_data: {
        periods: number;
        throttled_periods: number;
        throttled_time: number;
    };
}

type MemoryStats = {
    usage?: number;
    max_usage?: number;
    stats?: {
        active_anon?: number;
        active_file?: number;
        cache?: number;
        dirty?: number;
        hierarchical_memory_limit?: number;
        hierarchical_memsw_limit?: number;
        inactive_anon?: number;
        inactive_file?: number;
        mapped_file?: number;
        pgfault?: number;
        pgmajfault?: number;
        pgpgin?: number;
        pgpgout?: number;
        rss?: number;
        rss_huge?: number;
        total_active_anon?: number;
        total_active_file?: number;
        total_cache?: number;
        total_dirty?: number;
        total_inactive_anon?: number;
        total_inactive_file?: number;
        total_mapped_file?: number;
        total_pgfault?: number;
        total_pgmajfault?: number;
        total_pgpgin?: number;
        total_pgpgout?: number;
        total_rss?: number;
        total_rss_huge?: number;
        total_unevictable?: number;
        total_writeback?: number;
        unevictable?: number;
        writeback?: number;
    };
    limit?: number;
}

type NetworkStats = {
    rx_bytes: number;
    rx_packets: number;
    rx_errors: number;
    rx_dropped: number;
    tx_bytes: number;
    tx_packets: number;
    tx_errors: number;
    tx_dropped: number;
}

//--- HttpResponseDataType-------------------------------------------
export type HttpResponseDataType = {
    Id: string;
    Names: string[];
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    Ports: PortsType[];
    SizeRw: number;
    SizeRootFs: number;
    Labels: {
        maintainer: string;
    };
    State: string;
    Status: string;
    HostConfig: {
        NetworkMode: string;
    };
    NetworkSettings: {
        Networks: {
            bridge: NetworkType;
        };
    };
    Mounts: any[];
}

type PortsType = {
    PrivatePort: number;
    Type: string;
}

type NetworkType = {
    IPAMConfig: any;
    Links: any;
    Aliases: any;
    MacAddress: string;
    NetworkID: string;
    EndpointID: string;
    Gateway: string;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    DriverOpts: any;
    DNSNames: any;
}

//--- LineChartDataType----------------------------------------------
export type LineChartDataType = Array<{
    id:   string | number
    data: CoordsType[]
}>

export type CoordsType = {
    x: number | string | Date
    y: number | string | Date
}