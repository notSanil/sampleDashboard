"use client";

import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  CalendarToday,
  GridViewOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "6px",
  border: "1px",
  borderStyle: "solid",
  borderColor: "#EAECF0",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const IconWrapper = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: 32,
  alignItems: "center",
}));

const ItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: 32,
}));

export default function SearchAppbar() {
  return (
    <Box sx={{ height: 66, borderBottom: 1 }}>
      <AppBar
        position="relative"
        sx={{ padding: 0, backgroundColor: "white", color: "#5F6980" }}
        elevation={0}
      >
        <Toolbar sx={{ padding: { xs: 0 } }}>
          <Search sx={{ ml: 4 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ ml: 4, mr: 4 }}>
            <ItemWrapper>
              <IconWrapper>
                <NotificationsOutlined />
                <CalendarToday />
                <GridViewOutlined />
              </IconWrapper>
              <Avatar sx={{ width: 40, height: 40 }} />
            </ItemWrapper>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
