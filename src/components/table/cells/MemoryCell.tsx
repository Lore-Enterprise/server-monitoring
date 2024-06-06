import {ContainerType} from "../../../types/types.ts";
import {ProgressBar, ProgressBarLabel, ProgressBarWrapper} from "./styles/memoryCell.ts";
import {formatBytes} from "../../../utils/utils.ts";

export const MemoryCell = ({data}: {data: ContainerType}) => {
    // console.log("RENDER MEMORY CELL COMPONENT")

    const used_memory = (data.memory_stats?.usage ?? 0) - (data.memory_stats?.stats?.cache ?? 0);

    const usedMemory = formatBytes(used_memory, 1024)
    const limitMemory = formatBytes(data.memory_stats.limit ?? 0, 1024)

    return (
        <td>
            { (data.memory_stats.limit && used_memory) ?
                <ProgressBarWrapper title={`${used_memory} Bytes / ${data.memory_stats.limit} Bytes`}>
                    <ProgressBar max={data.memory_stats.limit} value={used_memory} />
                    <ProgressBarLabel>
                        <span>{usedMemory.value}{usedMemory.unit}</span> / {limitMemory.value}{limitMemory.unit}
                    </ProgressBarLabel>
                </ProgressBarWrapper>
                : "null"
            }
        </td>
    )
}