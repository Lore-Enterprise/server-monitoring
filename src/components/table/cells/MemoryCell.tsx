import {ContainerType} from "../../../types/types.ts";
import {ProgressBar, ProgressBarLabel, ProgressBarWrapper} from "./styles/memoryCell.ts";
import {formatBytes} from "../../../utils/utils.ts";

export const MemoryCell = ({data}: {data: ContainerType}) => {
    // console.log("RENDER MEMORY CELL COMPONENT")

    const used_memory = (data.memory_stats?.usage ?? 0) - (data.memory_stats?.stats?.cache ?? 0);

    return (
        <td>
            { (data.memory_stats.limit && used_memory) ?
                <ProgressBarWrapper title={`${used_memory} Bytes / ${data.memory_stats.limit} Bytes`}>
                    <ProgressBar max={data.memory_stats.limit} value={used_memory} />
                    <ProgressBarLabel>
                        <span>{formatBytes(used_memory)}</span> / {formatBytes(data.memory_stats.limit)}
                    </ProgressBarLabel>
                </ProgressBarWrapper>
                : "null"
            }
        </td>
    )
}