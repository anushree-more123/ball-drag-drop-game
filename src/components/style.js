import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyleContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
}));

export const StyleBallContainer = styled(Box)(() => ({
  width: "60px",
  height: "240px",
  borderRadius: "0 0 40px 40px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "#e6e6e6",
  boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10px",
  paddingBottom: "12px",
  overflow: "hidden",
}));

export const StyleBall = styled(Box)(() => ({
  height: "44px",
  width: "44px",
  borderRadius: "50%",
  marginBottom: "8px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
  cursor: "grab",
}));
