import styled from "styled-components";
import {baseStyles} from "../../../styles/baseStyles.ts";

export const Table = styled.table`
    width: 100%;
    height: fit-content;
    border-collapse: collapse;
    
    & th {
        text-align: left;
        padding-bottom: 12px;
        font-size: 1.125rem;
        width: 20%;

        &:nth-child(1)  { width: 22%; }

        &:nth-child(2)  { width: 12%; }

        &:nth-child(3) { width: 24%; }

        &:nth-child(4) { width: 18%; }

        &:nth-child(5) { width: 24%; }
    }
    
    & tbody {
        color: ${baseStyles.colors.textDarkGray};
    }
    
    & td {
        height: 46px;
        vertical-align: center;
        overflow: hidden;
        
        & > span {
            display: block;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    & tr:not(:last-child) td {
        border-bottom: 1px solid ${baseStyles.colors.border};
    }
`