import {ContainerType} from "../../../types/types.ts";
import {ProgressBar, ProgressBarLabel, ProgressBarWrapper} from "./styles/memoryCell.ts";
import {formatBits} from "../../../utils/utils.ts";

export const MemoryCell = ({data}: {data: ContainerType}) => {
    // console.log("RENDER MEMORY CELL COMPONENT")

    return (
        <td>
            { data.memory ?
                <ProgressBarWrapper title={`${data.memory.usage} bit / ${data.memory.max} bit`}>
                    <ProgressBar max={data.memory.max} value={data.memory.usage} />
                    <ProgressBarLabel>
                        <span>{formatBits(data.memory.usage)}</span> / {formatBits(data.memory.max)}
                    </ProgressBarLabel>
                </ProgressBarWrapper>
                : "null"
            }
        </td>
    )
}