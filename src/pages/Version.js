import { Typography } from "@mui/material";

export default function Version() {
    const version = process.env.VERSION ?? 'v1.0.0';

    return <Typography>{version}</Typography>
}