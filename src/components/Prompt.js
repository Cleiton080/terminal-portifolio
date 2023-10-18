import { Typography } from "@mui/material";
import { useMemo } from "react";
import Cursor from "./Cursor";

export default function Prompt({ username, hostname, command, textColorStextstyle, cursor }) {
    const fields = useMemo(
      () => [
        {
          value: username,
          color: textColorStextstyle?.username,
        },
        {
          value: "@",
          color: textColorStextstyle?.at,
        },
        {
          value: hostname,
          color: textColorStextstyle?.hostname,
        },
        {
          value: "~$ ",
          color: textColorStextstyle?.cwd,
        },
        {
          value: command,
          color: textColorStextstyle?.command,
        },
      ],
      [command]
    );

    const defaultColor = "white";
  
    return (
      <Typography component="div" style={{ display: "inline" }}>
        {fields.map((field) => (
          <Typography component="span" color={field.color ?? defaultColor}>
            {field.value}
          </Typography>
        ))}
        {cursor && (
          <Cursor color={defaultColor} hidden={command} /> 
        )}
      </Typography>
    );
  }