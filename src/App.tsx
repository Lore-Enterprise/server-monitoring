import {InfoSection, Wrapper} from "./styles/app.ts";

const headTableData: string[] = ["Network Traffic", "Server name", "Cores", "OS", "CPU usage", "Memory usage"]

const App = () => {
    return (
        <Wrapper>
            <InfoSection>
                <table>
                    <thead>
                        <tr>
                            { headTableData.map(headName => (
                                <th key={headName}>{headName}</th>
                            ))}
                        </tr>
                    </thead>
                </table>
                <tbody>

                </tbody>
            </InfoSection>
        </Wrapper>
    )
}

export default App
