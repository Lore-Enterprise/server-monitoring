import {Icon, NetworkValue, ServerValue, Title, TrafficInfo, TrafficValue, Wrapper} from "./styles/trafficPanel.ts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import {baseStyles} from "../../styles/baseStyles.ts";
import {useContext} from "react";
import {WsDataContext} from "../../App.tsx";
import {formatBytes} from "../../utils/utils.ts";
import {LineChart} from "../charts/LineChart.tsx";

export const TrafficPanel = () => {
    console.log("RENDER TrafficPanel COMPONENT")

    const wsResponseData = useContext(WsDataContext)

    let sum = 0
    Object.keys(wsResponseData).forEach((key) => {
        wsResponseData[key].slice(-1).map(wsData => {
            sum += wsData?.networks?.eth0?.rx_bytes ?? 0
        })
    })

    const trafficValue = formatBytes(sum, 1000)

    return (
        <Wrapper>
            <Title>Network Traffic</Title>
            <TrafficInfo>
                <NetworkValue>
                    <Icon>
                        <FaArrowUpLong />
                    </Icon>
                    <TrafficValue>{trafficValue.value}<span>{trafficValue.unit}</span></TrafficValue>
                </NetworkValue>
                <ServerValue>
                    <p>
                        Response Time: 3.28ms
                        <FaArrowUpLong size="0.875rem" color={baseStyles.colors.bgDarkGreen} />
                        21%
                    </p>
                    <p>
                        Server Uptime: 10:02:00
                        <FaArrowDownLong size="0.875rem" color={baseStyles.colors.bgRed} />
                        8%
                    </p>
                </ServerValue>
            </TrafficInfo>
            <div style={{height: "140px"}}>
                <LineChart />
            </div>
        </Wrapper>
    )
}