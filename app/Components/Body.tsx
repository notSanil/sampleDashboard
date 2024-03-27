import { Box } from "@mui/material";
import SearchAppbar from "./SearchAppbar";
import MainContent from "./MainContent";
import Cards from "./Cards";
import Chart from "./Chart";
import InstalledApps from "./InstalledApps";

export default function Body() {
  return (
    <Box sx={{ width: { xs: "100%", md: 5 / 6 } }} bgcolor={"#f2f4f7"}>
      <SearchAppbar />
      <Box
        m={{ xs: 2, md: 4 }}
        display="flex"
        flexDirection={"column"}
        gap={{ xs: 3, md: 4 }}
      >
        <MainContent />
        <Cards />
        <Chart />
        <InstalledApps />
      </Box>
    </Box>
  );
}
