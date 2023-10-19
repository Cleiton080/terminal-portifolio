import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Terminal from "./Terminal";
import Window from "./Window";
import styled from "@emotion/styled";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu Mono, monospace",
    fontSize: 20,
  },
});

const Container = styled(Box)({
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#191F28",
});

function App() {
  const [history, setHistory] = useState([]);

  const commands = useMemo(
    () => [
      [/clear/gi, () => setHistory([])],
      [/setname\s([aA0-zZ9]{0,})$/gi, (command) => {}],
      [
        /about/gi,
        () => {
          console.log("aquii");
        },
      ],
      [/linkedin/gi, () => {}],
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Window>
          <Terminal
            username="cleiton"
            hostname="linux"
            commands={commands}
            history={history}
            onCommandNotFound={(command) => `Command \`${command}\` not found`}
            onInputCommand={({ command, output }) =>
              setHistory((history) => [...history, { command, output }])
            }
          />
        </Window>
      </Container>
    </ThemeProvider>
  );
}

export default App;
