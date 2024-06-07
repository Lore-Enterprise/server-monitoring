import {ResponsiveLine} from "@nivo/line";
import {baseStyles} from "../../styles/baseStyles.ts";
import {useContext, useEffect, useState} from "react";
import {WsDataContext} from "../../App.tsx";
import {LineChartType} from "../../types/types.ts";

export const LineChart = () => {
    const wsResponseData = useContext(WsDataContext)

    const [chartData, setChartData] = useState<LineChartType>({
        rx_bytes: [],
        tx_bytes: []
    })

    useEffect(() => {
        let rxSum = 0
        let txSum = 0

        Object.keys(wsResponseData).forEach(wsKey => {
            wsResponseData[wsKey].slice(-1).forEach(wsData => {
                console.log(wsData.networks?.eth0?.rx_bytes ?? 0)

                rxSum += wsData.networks?.eth0?.rx_bytes ?? 0
                txSum += wsData.networks?.eth0?.tx_bytes ?? 0
            })
        })

        console.log(`
        rxSum: ${rxSum}
        txSum: ${txSum}
        `)
    }, [wsResponseData]);

    return (
        <ResponsiveLine
            data={[
                {
                    id: "rx_bytes (Input)",
                    data: [
                        { "x": 1, "y": 0 },
                        { "x": 2, "y": 5 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 20 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 10 },
                        { "x": 7, "y": 0 },
                        { "x": 8, "y": 33 },
                        { "x": 9, "y": 0 },
                        { "x": 10, "y": 50 }
                    ],
                },
                {
                    id: "tx_bytes (Output)",
                    data: [
                        { "x": 1, "y": 80 },
                        { "x": 2, "y": 25 },
                        { "x": 3, "y": 0 },
                        { "x": 4, "y": 75 },
                        { "x": 5, "y": 0 },
                        { "x": 6, "y": 40 },
                        { "x": 7, "y": 0 },
                        { "x": 8, "y": 80 },
                        { "x": 9, "y": 0 },
                        { "x": 10, "y": 100 }
                    ],
                },
            ]}
            margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 'auto',
                stacked: false,
                reverse: false
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            colors={[baseStyles.colors.bgDarkOrange, baseStyles.colors.bgLightOrangeWithOpacity]}
            axisLeft={null}
            gridYValues="last"
            enablePoints={false}
            enableSlices="x"
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[]}
            motionConfig="default"
            enableArea={true}
            areaOpacity={1}
            lineWidth={1}
            theme={{
                grid: {
                    line: {
                        stroke: baseStyles.colors.border,
                        strokeWidth: 1,
                    }
                },
            }}
        />
    )
}