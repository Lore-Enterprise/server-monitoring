import styled from "styled-components";
import {baseStyles} from "../../../styles/baseStyles.ts";

export const Table = styled.table`
    width: 100%;
    height: fit-content;
    
    & th {
        text-align: left;
        padding-bottom: 10px;
        font-size: 1.125rem;
        width: 25%;
        
        &:nth-child(2)  { width: 20%; }

        &:nth-child(3) { width: 27%; }
        
        &:nth-child(4) { width: 28%; }
    }
    
    & tbody {
        color: ${baseStyles.colors.textDarkGray};
    }
    
    & td {
        height: 46px;
        vertical-align: center;
    }
    
    & tr:not(:last-child) td {
        border-bottom: 1px solid ${baseStyles.colors.border};
    }
`