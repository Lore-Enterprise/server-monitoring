import styled from "styled-components";
import {baseStyles} from "./baseStyles.ts";

export const Wrapper = styled.div`
    background-color: ${baseStyles.colors.bgGray};
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const InfoSection = styled.section<{ $content?: string; }>`
    background-color: ${baseStyles.colors.bgWhite};
    border-radius: 16px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    padding: 24px 24px 14px;
    display: flex;
    gap: 30px;
    overflow: hidden;
`