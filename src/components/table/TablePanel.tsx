import {useContext} from "react";
import {WsDataContext} from "../../App.tsx";
import {MemoryCell} from "./cells/MemoryCell.tsx";

const headTableData: string[] = ["Network Traffic", "Server name", "OS", "CPU usage", "Memory usage"]

export const TablePanel = () => {
    const wsResponseData = useContext(WsDataContext)

    return (
        <table>
            <thead>
                <tr>
                    {headTableData.map(headName => (
                        <th key={headName}>{headName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { Object.keys(wsResponseData).map(keyName => (
                    wsResponseData[keyName].slice(-1).map((data) => (
                        <tr key={data.id}>
                            <td></td>
                            <td>{data.name}</td>
                            <td>{data.os}</td>
                            <td>{data.cpu ? data.cpu.usage : "null"}</td>
                            <MemoryCell data={data} />
                        </tr>
                    ))
                ))}
            </tbody>
        </table>
    )
}