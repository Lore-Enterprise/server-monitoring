import styled from "styled-components";
import {baseStyles} from "./baseStyles.ts";

export const Wrapper = styled.div`
    background-color: ${baseStyles.colors.bgGray};
    min-height: 100vh;
    padding: 20px;
`

export const InfoSection = styled.section`
    background-color: ${baseStyles.colors.bgWhite};
    border-radius: 16px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    padding: 28px;
    display: flex;
    gap: 30px;
    overflow: hidden;
    position: relative;
    
    &::before {
        content: "Uptime: 10:02:00";
        position: absolute;
        top: 0;
        right: 0;
        background: ${baseStyles.colors.bgLightGreen};
        border-bottom-left-radius: 10px;
        padding: 4px 12px 6px 10px;
        font-weight: bold;
    }
`