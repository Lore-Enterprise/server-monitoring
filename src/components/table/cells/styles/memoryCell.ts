import styled from "styled-components";
import {baseStyles} from "../../../../styles/baseStyles.ts";

export const ProgressBarWrapper = styled.div`
    width: 180px;
    height: 100%;
`

export const ProgressBar = styled.progress`
    width: 100%;
    height: 10px;
    margin-bottom: 6px;
    
    &::-webkit-progress-bar {
        border-radius: 10px;
        height: 10px;
        overflow: hidden;
        background-color: ${baseStyles.colors.bgGray};
    }
    
    &::-webkit-progress-value {
        background-color: ${baseStyles.colors.textDarkBlue};
        border-radius: 10px;
    }
`

export const ProgressBarLabel = styled.label`
    display: block;
    font-size: 0.75rem;
    text-align: right;
    
    & > span {
        font-weight: bold;
        color: ${baseStyles.colors.textDarkBlue};
    }
`