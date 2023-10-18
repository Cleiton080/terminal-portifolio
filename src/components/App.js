import { useState } from "react";
import Terminal from "./Terminal";
import { Container } from "@mui/material";

function App() {
  const [history, setHistory] = useState([]);

  const commands = [
    [/clear/gi, () => setHistory([])],
    [/setname\s([aA0-zZ9]{0,})$/gi, (command) => {}],
    [/about/gi, () => {
    }],
    [/linkedin/gi, () => {}],
  ];

  return (
    <Container maxWidth="xl">
      <Terminal
        username="cleiton"
        hostname="linux"
        commands={commands}
        history={history}
        onCommandNotFound={(command) => `Command \`${command}\` not found`}
        onInputCommand={({ command, output }) =>
          setHistory([...history, { command, output }])
        }
      />
    </Container>
  );
}

export default App;
