import {useContext} from "react";
import {WsDataContext} from "../../App.tsx";
import {MemoryCell} from "./cells/MemoryCell.tsx";
import {Table} from "./styles/tablePanel.ts";
import {LineChartWithoutLegend} from "../charts/LineChartWithoutLegend.tsx";

const headTableData: string[] = ["Server name", "Pids", "OS", "CPU usage", "Memory usage"]

export const TablePanel = () => {
    console.log("RENDER TablePanel COMPONENT")

    const wsResponseData = useContext(WsDataContext)

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
                { Object.keys(wsResponseData).map(keyName => (
                    wsResponseData[keyName].slice(-1).map((data) => (
                        <tr key={data.id}>
                            <td>{keyName}</td>
                            <td>{data.pids_stats.current ?? "null"}</td>
                            <td>{data.os}</td>
                            <td>{data.cpu ?
                                <div style={{ height: "46px", width: "140px"}}>
                                    <LineChartWithoutLegend keyName={keyName} />
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