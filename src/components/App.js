import { useMemo, useState } from "react";
import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Terminal from "./Terminal";
import Window from "./Window";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu Mono, monospace",
    fontSize: 20
  },
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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#191F28",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Window>
            <Terminal
              username="cleiton"
              hostname="linux"
              commands={commands}
              history={history}
              onCommandNotFound={(command) =>
                `Command \`${command}\` not found`
              }
              onInputCommand={({ command, output }) =>
                setHistory((history) => [...history, { command, output }])
              }
            />
          </Window>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
