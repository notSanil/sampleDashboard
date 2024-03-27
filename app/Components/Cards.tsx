import { Box, Card, CardContent, Typography } from "@mui/material";

export default function Cards() {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={4} width={"100%"}>
      <StatisticCard
        heading="Revenue"
        statistic="$56,945"
        changePercentage={45}
        previous="4.6%"
      />
      <StatisticCard
        heading="Users"
        statistic="76.8%"
        changePercentage={-1.7}
        previous="4.6%"
      />
      <StatisticCard
        heading="New Signups"
        statistic="116"
        changePercentage={0.0}
      />
      <StatisticCard
        heading="Retention"
        statistic="12.67%"
        changePercentage={0.6}
        previous="4.6"
      />
    </Box>
  );
}

interface StatisticCardProps {
  heading: string;
  statistic: string;
  changePercentage: number;
  previous?: string;
}

const colors = [
  {
    //Reds
    bg: "#FFE0E3",
    text: "#DC3545",
  },
  {
    //Gray
    bg: "#F2F4F7",
    text: "#5F6980",
  },
  {
    // Greens
    bg: "#DCFFF5",
    text: "#20C997",
  },
];

function StatisticCard({
  heading,
  statistic,
  changePercentage,
  previous,
}: StatisticCardProps) {
  //Math.sign returns -1, 0, +1 for negative, zero, and positive
  //Use that value + 1 to index into the colors array
  const color = colors[Math.sign(changePercentage) + 1];

  return (
    <Card sx={{ borderRadius: 3, flex: "1 0 0" }}>
      <CardContent>
        <Typography fontSize={16} color={"#5F6980"} fontWeight={400}>
          {heading}
        </Typography>
        <Typography fontSize={26} color={"#282828"} fontWeight={600}>
          {statistic}
        </Typography>
        <Box
          mt={4}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Box
            borderRadius={25}
            sx={{ backgroundColor: color.bg }}
            fontSize={12}
            fontWeight={600}
            px={1.25}
            py={0.25}
            color={color.text}
          >
            {changePercentage}%
          </Box>
          {previous ? (
            <Typography ml={1} color={"#9D9FA1"} fontWeight={600} fontSize={12}>
              From {previous}
            </Typography>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}
