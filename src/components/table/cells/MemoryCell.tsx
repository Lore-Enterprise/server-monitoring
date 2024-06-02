import {ContainerType} from "../../../types/types.ts";
import {ProgressBar, ProgressBarLabel, ProgressBarWrapper} from "./styles/memoryCell.ts";
import {formatBits} from "../../../utils/utils.ts";

export const MemoryCell = ({data}: {data: ContainerType}) => {
    // console.log("RENDER MEMORY CELL COMPONENT")

    return (
        <td>
            { (data.memory_stats.limit && data.memory_stats.max_usage) ?
                <ProgressBarWrapper title={`${data.memory_stats.max_usage} bit / ${data.memory_stats.limit} bit`}>
                    <ProgressBar max={data.memory_stats.limit} value={data.memory_stats.max_usage} />
                    <ProgressBarLabel>
                        <span>{formatBits(data.memory_stats.max_usage)}</span> / {formatBits(data.memory_stats.limit)}
                    </ProgressBarLabel>
                </ProgressBarWrapper>
                : "null"
            }
        </td>
    )
}