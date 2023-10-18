import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Cmd({ username, hostname, onPressEnterKey, io }) {
  const [input, setInput] = useState("");

  const handleKeyDown = ({ which, key }) => {
    if (which === 8) {
      return setInput((input) => input.slice(0, -1));
    } else if (which === 13) {
      onPressEnterKey(input);
      return setInput("");
    } else if (which >= 32 && which <= 126) {
      return setInput((input) => input + key);
    }
  };

  useEffect(() => {
    if (!io) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [input]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <span>
            {username}@{hostname}:~${` ${io ? io.command : input}`}
          </span>
        </Grid>
        <Grid item xs={12}>
          <span>{io ? io.output : null}</span>
        </Grid>
      </Grid>
    </Container>
  );
}
