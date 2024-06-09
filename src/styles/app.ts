import styled from "styled-components";
import {baseStyles} from "./baseStyles.ts";

export const Wrapper = styled.div`
    background-color: ${baseStyles.colors.bgGray};
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const InfoSection = styled.section<{ $content?: string; }>`
    justify-self: flex-end;
    background-color: ${baseStyles.colors.bgWhite};
    border-radius: 16px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    padding: 28px 28px 16px;
    display: flex;
    gap: 30px;
    overflow: hidden;
`