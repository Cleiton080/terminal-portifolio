import { Box, Container } from "@mui/material";

export default function Window({ children }) {
  return (
    <Box
      style={{
        position: "fixed",
        top: "15%",
        left: "15%",
        width: "70%",
        height: "70%",
        backgroundColor: "#253239",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Alinhar o conteúdo no topo
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </Box>
  );
}
