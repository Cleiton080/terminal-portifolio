import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Terminal from "./Terminal";
import Window from "./Window";
import styled from "@emotion/styled";
import commands from "../common/commands";

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

  const cmd = useMemo(() => commands, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Window>
          <Terminal
            username="cleiton"
            hostname="linux"
            commands={cmd}
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
