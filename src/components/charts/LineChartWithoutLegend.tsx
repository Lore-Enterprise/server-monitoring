import {ResponsiveLine} from "@nivo/line";
import {CoordsType} from "../../types/types.ts";

export const LineChartWithoutLegend = ({ chartData }: { chartData: CoordsType[] }) => {
    // console.log("RENDER LineChartWithoutLegend COMPONENT")

    return (
        <ResponsiveLine
            data={[
                {
                    id: "CPU usage monitoring",
                    data: chartData,
                },
            ]}
            margin={{ top: 5, right: 0, bottom: 14, left: 0 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 100,
                stacked: false,
                reverse: false
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            lineWidth={1}
            colors="#000000"
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            isInteractive={false}
            enableCrosshair={false}
            legends={[]}
            animate={false}
            motionConfig="default"
        />
    )
}