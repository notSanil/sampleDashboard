import { Box } from "@mui/material";
import SearchAppbar from "./SearchAppbar";
import MainContent from "./MainContent";
import Cards from "./Cards";
import Chart from "./Chart";
import InstalledApps from "./InstalledApps";

export default function Body() {
  return (
    <Box sx={{ width: 5 / 6 }} bgcolor={"#f2f4f7"}>
      <SearchAppbar />
      <Box m={4} display="flex" flexDirection={"column"} gap={4}>
        <MainContent />
        <Cards />
        <Chart />
        <InstalledApps />
      </Box>
    </Box>
  );
}
