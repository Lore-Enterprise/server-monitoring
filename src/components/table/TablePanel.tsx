import {useContext, useEffect, useMemo, useState} from "react";
import {HttpDataContext, WsDataContext} from "../../App.tsx";
import {MemoryCell} from "./cells/MemoryCell.tsx";
import {Table} from "./styles/tablePanel.ts";
import {LineChartWithoutLegend} from "../charts/LineChartWithoutLegend.tsx";
import {ContainerType, CoordsType} from "../../types/types.ts";
import initialLineChartData from "../charts-data/lineChartData.json";

const headTableData: string[] = ["Name", "Pids", "Image", "CPU usage", "Memory usage"]

const getCurrentTime = () => new Date().getTime()

const cpuUsage = (data: ContainerType): number => {
    const cpu_delta = data.cpu_stats.cpu_usage.total_usage - data.precpu_stats.cpu_usage.total_usage
    const system_cpu_delta = (data.cpu_stats.system_cpu_usage ?? 0) - (data.precpu_stats.system_cpu_usage ?? 0)
    const number_cpus = data.cpu_stats.online_cpus ?? 0
    const CPU_usage = (cpu_delta / system_cpu_delta) * number_cpus * 100

    return CPU_usage === 0 ? 0 : Number(CPU_usage.toFixed(2))
}

export const TablePanel = () => {
    console.log("RENDER TablePanel COMPONENT")

    const wsResponseData = useContext(WsDataContext)
    const httpResponseData = useContext(HttpDataContext)

    const [chartData, setChartData] = useState<CoordsType[]>(initialLineChartData)

    useEffect(() => {
        if (httpResponseData.length > 0) {
            httpResponseData.forEach(httpData => {
                wsResponseData[httpData.Names[0]].slice(-1).forEach((data) => {
                    if (data.cpu_stats.online_cpus) {
                        setChartData(prevState => [
                            ...prevState,
                            {x: getCurrentTime(), y: cpuUsage(data)}
                        ].slice(-20))
                    }
                })
            })
        }
    }, [httpResponseData, wsResponseData])

    const memoizedChartData = useMemo(() => chartData, [chartData]);

    return (
        <Table>
            <thead>
                <tr>
                    { headTableData.map(headName => (
                        <th key={headName}>{headName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { httpResponseData.map(httpData => (
                    wsResponseData[httpData.Names[0]].slice(-1).map((data) => (
                        <tr key={data.keyId}>
                            <td>{httpData.Names[0]}</td>
                            <td>{data.pids_stats.current ?? "null"}</td>
                            <td>
                                <span title={httpData.Image}>{httpData.Image}</span>
                            </td>
                            <td>{ data.cpu_stats.online_cpus ?
                                <div style={{ height: "46px", width: "140px"}}>
                                    <LineChartWithoutLegend chartData={memoizedChartData} />
                                </div> :
                                "null"}
                            </td>
                            <MemoryCell data={data} />
                        </tr>
                    ))
                ))}
            </tbody>
        </Table>
    )
}