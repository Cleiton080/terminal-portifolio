import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

const Container = styled(Box)({
  position: "fixed",
  top: "15%",
  left: "15%",
  width: "70%",
  height: "70%",
  backgroundColor: "#253239",
  padding: 20,
  "overflow-y": "auto",
  "&::-webkit-scrollbar": { // TODO: ADD AS GLOBAL STYLE
    width: 20,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#1a2129",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#28353B",
    borderRadius: 2,
  },
});

export default function Window({ children }) {
  const windowRef = useRef(null);

  useEffect(() => {
    const { scrollHeight } = windowRef.current;

    windowRef.current?.scrollTo({
      top: scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [children]);

  return (
    <Container ref={(ref) => (windowRef.current = ref)}>{children}</Container>
  );
}
