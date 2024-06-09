import {ResponsiveLine} from "@nivo/line";
import {baseStyles} from "../../styles/baseStyles.ts";
import {useContext, useEffect, useState} from "react";
import {WsDataContext} from "../../App.tsx";
import {LineChartType} from "../../types/types.ts";
import {localeCurrentTime} from "../../utils/utils.ts";

export const LineChart = () => {
    const wsResponseData = useContext(WsDataContext)

    const [chartData, setChartData] = useState<LineChartType>({
        rx_bytes: [],
        tx_bytes: []
    })

    console.log(chartData)

    useEffect(() => {
        let rxSum = 0
        let txSum = 0

        Object.keys(wsResponseData).forEach(wsKey => {
            wsResponseData[wsKey].slice(-1).forEach(wsData => {
                rxSum += wsData.networks?.eth0?.rx_bytes ?? 0
                txSum += wsData.networks?.eth0?.tx_bytes ?? 0
            })
        })

        const currentTime = localeCurrentTime()

        setChartData(prevState => {
            // Checking if a record exists with the current time
            const lastRx = prevState.rx_bytes[prevState.rx_bytes.length - 1];
            const lastTx = prevState.tx_bytes[prevState.tx_bytes.length - 1];

            // If a record with the current time already exists, return the previous state without changes
            if (lastRx?.x === currentTime || lastTx?.x === currentTime) {
                return prevState;
            }

            return {
                ...prevState,
                rx_bytes: [...prevState.rx_bytes, { x: currentTime, y: rxSum }].slice(-20),
                tx_bytes: [...prevState.tx_bytes, { x: currentTime, y: txSum }].slice(-20)
            };
        });
    }, [wsResponseData]);

    return (
        <ResponsiveLine
            data={[
                {
                    id: "Data sent",
                    data: chartData.tx_bytes,
                },
                {
                    id: "Data received",
                    data: chartData.rx_bytes,
                },
            ]}
            margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: "auto",
                stacked: false,
                reverse: false
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -30,
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
            enableArea={true}
            areaOpacity={1}
            lineWidth={1}
            animate={false}
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