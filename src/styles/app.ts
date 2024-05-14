import styled from "styled-components";
import {baseStyles} from "./baseStyles.ts";

export const Wrapper = styled.div`
    background-color: ${baseStyles.colors.bgGray};
    min-height: 100vh;
    padding: 20px;
`

export const InfoSection = styled.section`
    background-color: ${baseStyles.colors.bgWhite};
    border-radius: 20px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`