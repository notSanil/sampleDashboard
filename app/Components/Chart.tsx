"use client";

import { MoreVert } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Chart() {
  return (
    <Box borderRadius={3} sx={{ backgroundColor: "white" }}>
      <Box
        display="flex"
        flexDirection={"row"}
        borderBottom={1}
        borderColor={"#EAECF0"}
        justifyContent={"space-between"}
      >
        <Typography
          fontSize={18}
          lineHeight={1.5}
          fontWeight={600}
          ml={3}
          my={2}
        >
          Performance
        </Typography>
        <Button startIcon={<MoreVert />} sx={{ color: "#9D9FA1" }}></Button>
      </Box>
      <LineChart
        slotProps={{
          legend: {
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 2,
            labelStyle: {
              font: "inherit",
              fontSize: 14,
              fontWeight: 400,
              color: "#5F6980",
            },
          },
        }}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
          },
        ]}
        series={[
          {
            curve: "natural",
            data: uData,
            area: true,
            label: "Instagram",
            id: "ig",
          },
          {
            curve: "natural",
            data: pData,
            area: true,
            label: "Facebook",
            id: "fb",
          },
        ]}
        height={300}
        sx={{
          "& .MuiAreaElement-series-fb": {
            fill: "url(#fbGradient)",
          },
          "& .MuiAreaElement-series-ig": {
            fill: "url(#igGradient)",
          },
        }}
      >
        <defs>
          <linearGradient id="fbGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#4285F440" />
            <stop offset="100%" stopColor="#4285F4" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="igGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#20C99721" />
            <stop offset="100%" stopColor="#20C997" stopOpacity={0} />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
}
