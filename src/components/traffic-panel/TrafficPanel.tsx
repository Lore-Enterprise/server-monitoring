import {Icon, NetworkValue, ServerValue, Title, TrafficInfo, TrafficValue} from "./styles/trafficPanel.ts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import {baseStyles} from "../../styles/baseStyles.ts";

export const TrafficPanel = () => {
    return (
        <div style={{ flex: "0 0 500px" }}>
            <Title>Network Traffic</Title>
            <TrafficInfo>
                <NetworkValue>
                    <Icon>
                        <FaArrowUpLong />
                    </Icon>
                    <TrafficValue>518.00<span>Mbs</span></TrafficValue>
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
            <div style={{background: "lightgray", height: "120px"}}></div>
        </div>
    )
}