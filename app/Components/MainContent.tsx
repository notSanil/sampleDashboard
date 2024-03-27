import { Bolt, BoltOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function MainContent() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#282828",
          borderRadius: "16px",
          display: "inline-block",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            m: 4,
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlignLast: "justify",
            }}
          >
            <Typography fontSize={28}>Unlock premium stats</Typography>
            <Typography fontSize={14}>
              Get upto 10TB of storage for a limited time
            </Typography>
          </Box>
          <Button
            variant={"contained"}
            startIcon={<Bolt />}
            sx={{
              font: "inherit",
              borderRadius: 39,
              bgcolor: "white",
              color: "#282828",
              ":hover": {
                bgcolor: "gray",
              },
              my: 1,
              fontSize: 16,
            }}
          >
            Upgrade
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
