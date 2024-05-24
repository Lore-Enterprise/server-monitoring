import {InfoSection, Wrapper} from "./styles/app.ts";
import {createContext, useEffect, useState} from "react";
import {createInitValueWsData} from "./utils/utils.ts";
import {EmptyWsResponseDataType, HttpResponseDataType, WsResponseDataType} from "./types/types.ts";
import {generateUniqueID} from "./utils/generateID.ts";
import {TablePanel} from "./components/table/TablePanel.tsx";

export const WsDataContext = createContext<WsResponseDataType>({});

export const App = () => {
    console.log("RENDER COMPONENT")

    const [httpResponseData, setHttpResponseData] = useState<HttpResponseDataType>({})
    console.log(httpResponseData)

    const [wsResponseData, setWsResponseData] = useState<WsResponseDataType>({});
    console.log(wsResponseData)

    useEffect(() => {
        let ignore = false;

        fetch("http://localhost:8080/containers")
            .then(resolve => resolve.json())
            .then(data => {
                if (!ignore) {
                    setHttpResponseData(data)
                    const initValueWsData: EmptyWsResponseDataType = createInitValueWsData(data)
                    setWsResponseData(initValueWsData)
                }
            })
            .catch(error => console.error(`An error occurred in the HTTP request. ${error.name}: ${error.message}`))

        return () => {
            ignore = true;
        }
    }, []);

    useEffect(() => {
        console.log("МЫ РАБОТАЕМ С СОКЕТОМ")
        const openWebSocket = (containerName: string) => {
            const ws = new WebSocket(`ws://localhost:8080${containerName}/stats`);

            ws.onopen = () => {
                console.log(`Connected to: ${containerName}`);
            };

            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log(`WebSocket message for ${containerName}:`, message);

                const updatedMessage = { ...message, id: generateUniqueID() };

                setWsResponseData(prevState => {
                    if (!prevState) return prevState; // handle case where prevState is null
                    return {
                        ...prevState,
                        // Add a new message to the end of the array and limit the length to 10 elements
                        [updatedMessage.name]: [...(prevState[updatedMessage.name] || []), updatedMessage].slice(-10) // message
                    };
                });
            };

            ws.onclose = () => {
                console.warn(`WebSocket connection closed for container: ${containerName}`);
            };

            ws.onerror = (error) => {
                console.error(`WebSocket error for ${containerName}:`, error);
            };

            return ws;
        };

        // Opening websockets for all containers after receiving data
        if (Object.keys(httpResponseData).length > 0) {
            const containerNames = Object.keys(httpResponseData);
            const wsConnections = containerNames.map((name) => openWebSocket(name));

            // Closing websockets when unmounting a component
            return () => {
                wsConnections.forEach((ws) => ws.close());
            };
        }
    }, [httpResponseData]);

    return (
        <WsDataContext.Provider value={wsResponseData}>
            <Wrapper>
                <InfoSection>
                    <TablePanel />
                </InfoSection>
            </Wrapper>
        </WsDataContext.Provider>
    )
}