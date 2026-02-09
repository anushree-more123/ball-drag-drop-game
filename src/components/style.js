import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const AppWrapper = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#f2f2f2",
}));

export const GameTitle = styled(Box)(() => ({
  marginTop: "20px",
  marginBottom: "8px",
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "#333",
  fontSize: "28px",
}));

export const GameBoardWrapper = styled(Box)(() => ({
  flex: 1,
  width: "100%",
}));

export const StyleContainer = styled(Box)(() => ({
  width: "100%",
  height: "60%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
}));

export const BoardWrapper = styled(Box)(() => ({
  width: "100%",
  height: "100%",
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
  cursor: "grab",
  boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
  position: "relative",
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    top: "4px",
    left: "8px",
    width: "60%",
    height: "40%",
    background: "rgba(255,255,255,0.4)",
    borderRadius: "50%",
    filter: "blur(2px)",
  },
}));

export const SuccessDialogContent = styled(Box)(() => ({
  textAlign: "center",
  padding: "40px 60px",
  borderRadius: "12px",
}));

export const SuccessTitle = styled(Box)(() => ({
  marginBottom: "16px",
  fontWeight: "bold",
  fontSize: "28px",
}));

export const SuccessSubtitle = styled(Box)(() => ({
  marginBottom: "24px",
  fontSize: "18px",
}));

export const RestartButton = styled(Button)(() => ({
  background: "#2ecc71",
  fontWeight: "bold",
  padding: "10px 24px",
  borderRadius: "20px",
  color: "#fff",

  "&:hover": {
    background: "#27ae60",
  },
}));
