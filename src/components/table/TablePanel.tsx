import {useContext} from "react";
import {WsDataContext} from "../../App.tsx";
import {MemoryCell} from "./cells/MemoryCell.tsx";
import {Table} from "./styles/tablePanel.ts";
import {ContainerType} from "../../types/types.ts";

const headTableData: string[] = ["Server name", "OS", "CPU usage", "Memory usage"]

export const TablePanel = () => {
    console.log("RENDER TABLE COMPONENT")

    const wsResponseData = useContext(WsDataContext)
    console.log(wsResponseData)

    const isExited = (value: ContainerType) => value.status === "exited"

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
                        <tr key={data.id} className={ isExited(data) ? "exited" : "" }>
                            <td>{keyName}</td>
                            <td>{data.os}</td>
                            <td>{data.cpu ? data.cpu.usage : "null"}</td>
                            <MemoryCell data={data} />
                        </tr>
                    ))
                ))}
            </tbody>
        </Table>
    )
}