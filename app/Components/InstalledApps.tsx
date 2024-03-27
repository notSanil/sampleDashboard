"use client";

import { ArrowBack, ArrowForward, MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import { useState } from "react";

function createRow(
  name: string,
  amount: number,
  status: "Active" | "Pending" | "Cancelled",
  userId: number,
  joined: string,
  group: string
) {
  return { name, amount, status, userId, joined, group };
}

const rows = [
  createRow("Zepplin", 686.0, "Active", 114433, "October", "Finance"),
  createRow("Figma", 864.0, "Pending", 76223, "June", "Design"),
  createRow("Meta", 176.0, "Cancelled", 89453, "March", "Coding"),
  createRow("Angular", 49.0, "Active", 11467, "February", "Marketing"),
  createRow("Vue", 999.0, "Active", 6734, "October", "Finance"),

  createRow("Google", 185.0, "Active", 15763, "December", "Marketing"),
  createRow("Amazon", 235.0, "Active", 167668, "October", "Finance"),
];

export default function InstalledApps() {
  return (
    <Box sx={{ backgroundColor: "white" }} borderRadius={3}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={1}
        borderColor={"#EAECF0"}
        px={3}
        py={2}
      >
        <Typography fontWeight={600} fontSize={18} fontFamily={"inherit"}>
          Installed Apps
        </Typography>
        <MoreVert></MoreVert>
      </Box>
      <AppsTable />
    </Box>
  );
}

function AppsTable() {
  const [page, setPage] = useState(0);

  const rowsPerPage: number = 5;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ marginBottom: 3, boxShadow: "none" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#F9FAFB", fontSize: 14 }}>
          <TableRow>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              Source
            </TableCell>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              Amount
            </TableCell>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              Status
            </TableCell>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              User ID
            </TableCell>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              Joined
            </TableCell>
            <TableCell sx={{ fontFamily: "inherit", color: "#5F6980" }}>
              Group
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                sx={{ color: "#282828", fontSize: 14, fontWeight: 600 }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{ color: "#5F6980", fontSize: 14, fontWeight: 400 }}
              >
                {row.amount.toFixed(2)}
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: statusColors[row.status].bg,
                    color: statusColors[row.status].text,
                    borderRadius: 25,
                    px: 1.25,
                    py: 0.25,
                    width: "min-content",
                  }}
                >
                  {row.status}
                </Box>
              </TableCell>
              <TableCell
                sx={{ color: "#5F6980", fontSize: 14, fontWeight: 400 }}
              >
                {row.userId}
              </TableCell>
              <TableCell
                sx={{ color: "#5F6980", fontSize: 14, fontWeight: 400 }}
              >
                {row.joined}
              </TableCell>
              <TableCell
                sx={{ color: "#5F6980", fontSize: 14, fontWeight: 400 }}
              >
                {row.group}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[]} // Suppress this option
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
              sx={{
                "& .MuiTablePagination-displayedRows": { display: "none" },
                "& .MuiTablePagination-spacer": { display: "none" },
                borderBottom: 0,
              }}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const statusColors = {
  Active: {
    bg: "#DCFFF5",
    text: "#20C997",
  },
  Pending: {
    bg: "#FFEAD8",
    text: "#FD7E14",
  },
  Cancelled: {
    bg: "#F2F4F7",
    text: "#5F6980",
  },
};

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const totalPages = Math.ceil(count / rowsPerPage);

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <ArrowForward /> : <ArrowBack />}
      </IconButton>
      <Typography>
        {page + 1} / {totalPages}
      </Typography>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <ArrowBack /> : <ArrowForward />}
      </IconButton>
    </Box>
  );
}
