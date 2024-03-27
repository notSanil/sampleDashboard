"use client";

import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Stack direction="row" spacing={0} bgcolor={"#f2f4f7"}>
        <Sidebar />
        <Body />
      </Stack>
    </main>
  );
}
