import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 0 0 500px;
`

export const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.125rem;
`

export const TrafficInfo = styled.div`
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

//---NetworkValue--------------------------------
export const NetworkValue = styled.div`
    display: flex;
    gap: 4px;
`

export const Icon = styled.div`
    width: 14px;
    height: 14px;
    position: relative;
    top: 8px;
    
    & > svg {
        width: 100%;
        height: 100%;
    }
`

export const TrafficValue = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    vertical-align: center;
    
    & > span {
        margin-left: 6px;
        font-size: 1rem;
    }
`

//---ServerValue---------------------------------
export const ServerValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    & > p {
        display: flex;
        gap: 4px;
        align-items: end;
    }
`