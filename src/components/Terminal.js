import { Box, Container } from "@mui/material";
import Cmd from "./Cmd";

export default function Terminal({
  username,
  hostname,
  commands,
  history,
  onCommandNotFound,
  onInputCommand,
}) {
  const runCommand = (value) => {
    for (let [command, action] of commands) {
      const match = value.match(command);

      if (match) {
        const output = action(match);
        onInputCommand({ command: value, output });

        return true;
      }
    }

    return false;
  };

  const handlePressEnterKey = (value) => {
    const executableCommand = runCommand(value);

    if (!executableCommand) {
      const output = onCommandNotFound(value);
      onInputCommand({ command: value, output });
    }
  };

  return (
    <Box>
      {history.map((io, index) => (
        <Cmd key={index} username={username} hostname={hostname} io={io} />
      ))}

      <Cmd
        username={username}
        hostname={hostname}
        onPressEnterKey={handlePressEnterKey}
      />
    </Box>
  );
}
