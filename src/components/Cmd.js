import { Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Prompt from "./Prompt";

export default function Cmd({ username, hostname, onPressEnterKey, io }) {
  const [input, setInput] = useState("");

  const handleKeyDown = useCallback(
    ({ which, key }) => {
      if (which === 8) {
        return setInput((input) => input.slice(0, -1));
      } else if (which === 13) {
        onPressEnterKey(input);
        return setInput("");
      } else if (which >= 32 && which <= 126) {
        return setInput((input) => input + key);
      }
    },
    [setInput, input, onPressEnterKey]
  );

  useEffect(() => {
    if (!io) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown, io]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Prompt
          username={username}
          hostname={hostname}
          command={io ? io.command : input}
          textColorStextstyle={{
            username: "#778D59",
            at: "#3E989E",
            hostname: "#405182",
            cwd: "#952D48",
            command: "white",
          }}
          cursor={!io}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography component="span" color="white">
          {io ? io.output : null}
        </Typography>
      </Grid>
    </Grid>
  );
}
