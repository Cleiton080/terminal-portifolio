import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Cmd({ username, hostname, onPressEnterKey, io }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (value) => {
    if (value.which === 8) {
      setInput((previusValue) => previusValue.slice(0, -1));
    }

    if (value.which === 13) {
      return onPressEnterKey(input);
    }

    if (value.which >= 32 && value.which <= 126) {
      setInput((previusValue) => previusValue + value.key);
    }
  };

  useEffect(() => {
    if (!io) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return (
    <Grid container>
      <Grid sx={2}>
        {username}@{hostname}:~${` ${input}`}
      </Grid>
      <Grid sx={10}></Grid>
    </Grid>
  );
}
