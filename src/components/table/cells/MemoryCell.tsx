import {ContainerType} from "../../../types/types.ts";

export const MemoryCell = ({data}: {data: ContainerType}) => {
    return (
        <td>
            { data.memory ?
                <progress max={data.memory.max} value={data.memory.usage}>{data.memory.usage}</progress>
                : "null"
            }
        </td>
    )
}