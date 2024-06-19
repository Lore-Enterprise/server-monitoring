import {useContext} from "react";
import {HttpDataContext, WsDataContext} from "../../App.tsx";
import {MemoryCell} from "./cells/MemoryCell.tsx";
import {Table} from "./styles/tablePanel.ts";
import {LineChartWithoutLegend} from "../charts/LineChartWithoutLegend.tsx";

const headTableData: string[] = ["Name", "Pids", "Status", "Image", "CPU usage", "Memory usage"]

export const TablePanel = () => {
    console.log("RENDER TablePanel COMPONENT")

    const wsResponseData = useContext(WsDataContext)
    const httpResponseData = useContext(HttpDataContext)

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
                            <td>status</td>
                            <td>
                                <span title={httpData.Image}>{httpData.Image}</span>
                            </td>
                            <td>{ data.cpu_stats.online_cpus ?
                                <div style={{ height: "46px", width: "140px" }}>
                                    <LineChartWithoutLegend containerName={data.name}/>
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