import styled from "styled-components";
import {baseStyles} from "../../../styles/baseStyles.ts";

export const Table = styled.table`
    width: 100%;
    height: fit-content;
    border-collapse: collapse;
    cursor: default;
    
    & th {
        text-align: left;
        padding-bottom: 12px;
        font-size: 1.125rem;
        width: 20%;

        &:nth-child(1)  { width: 22%; }

        &:nth-child(2)  { width: 12%; }

        &:nth-child(3) { width: 23%; }

        &:nth-child(4) { width: 21%; }

        &:nth-child(5) { width: 22%; }
    }
    
    & tbody {
        color: ${baseStyles.colors.textDarkGray};
    }
    
    & td {
        height: 46px;
        vertical-align: center;
        
        & > span {
            max-width: 180px;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    
    & tr:not(:last-child) td {
        border-bottom: 1px solid ${baseStyles.colors.border};
    }
`