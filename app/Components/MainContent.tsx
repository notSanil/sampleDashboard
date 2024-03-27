import { Bolt, BoltOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function MainContent() {
  return (
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
          flexDirection: { xs: "column", md: "row" },
          m: 4,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: { xs: "center", md: "justify" },
            textAlignLast: { xs: "center", md: "justify" },
          }}
        >
          <Typography
            fontSize={{ xs: 26, md: 28 }}
            fontWeight={600}
            fontFamily={"inherit"}
          >
            Unlock premium stats
          </Typography>
          <Typography fontSize={14} fontWeight={400} fontFamily={"inherit"}>
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
            my: { xs: 0, md: 1 },
            mt: { xs: 0.25, md: 1 },
            fontSize: { xs: 14, md: 16 },
            width: "min-content",
            fontWeight: 600,
          }}
        >
          Upgrade
        </Button>
      </Box>
    </Box>
  );
}
