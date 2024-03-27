"use client";

import {
  ExpandMoreSharp,
  FolderOutlined,
  GridViewOutlined,
  LanguageSharp,
  MailOutline,
  Person,
  QueryStatsSharp,
  SendToMobileOutlined,
  SupportOutlined,
  TuneSharp,
  WbSunny,
} from "@mui/icons-material";
import { Accordion, Box, Stack, styled } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "next/link";

const BrandingIcon = styled("div")(({ theme }) => ({}));

const Branding = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  fontWeight: "800",
  fontSize: 18,
}));

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 1 / 6,
        height: "100vh",
        minHeight: 1024,
        borderRight: "1px",
        borderColor: "#EAECF0",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          ml: 2.5,
          mt: 2.25,
          flex: "0 0 0",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <BrandingIcon>
          <WbSunny />
        </BrandingIcon>
        <Branding>Clonify</Branding>
      </Box>

      <Box sx={{ mt: 6.75, flex: "1 0 0" }}>
        <Box>
          <Box
            sx={{
              pl: 2.5,
              color: "#9D9FA1",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            DASHBOARD
          </Box>
          <Box sx={{ mt: 2 }}>
            <SidebarItem
              icon={<QueryStatsSharp />}
              title="Dashboard"
              content={["Analytics", "Finance", "Job Board"]}
            />
            <SidebarItem
              icon={<MailOutline />}
              title="Messages"
              content={["Message 1", "Message 2"]}
            />
            <SidebarItem
              icon={<Person />}
              title="Friends"
              content={["Friend 1", "Friend 2"]}
            />
            <SidebarItem
              icon={<GridViewOutlined />}
              title="Apps"
              content={["App 1", "App 2"]}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              mt: 4,
              pl: 2.5,
              color: "#9D9FA1",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            PAGES
          </Box>
          <Box sx={{ mt: 2 }}>
            <SidebarItem
              icon={<SupportOutlined />}
              title="Help Center"
              content={["Contact", "Raise a ticket"]}
            />
            <SidebarItem
              icon={<FolderOutlined />}
              title="File Manager"
              content={["File 1", "File 2"]}
            />
          </Box>
        </Box>
      </Box>

      <Box borderTop={1} borderColor={"#EAECF0"}>
        <Box
          sx={{
            flex: "0 0 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mx: 2.5,
            py: 1.5,
            color: "#9D9FA1",
          }}
        >
          <TuneSharp />
          <SendToMobileOutlined />
          <LanguageSharp />
        </Box>
      </Box>
    </Box>
  );
}

interface SidebarItemProps {
  icon: any;
  title: String;
  content: Array<string>;
}

function SidebarItem({ icon, title, content }: SidebarItemProps) {
  function generateLinks() {
    const links = [];
    for (var i = 0; i < content.length; ++i) {
      links.push(
        <Link
          className={" pl-7 text-sm " + (i > 0 ? "mt-3" : "")}
          href="/"
          key={content[i]}
        >
          {content[i]}
        </Link>
      );
    }

    return links;
  }

  return (
    <Accordion
      elevation={0}
      sx={{ "&:before": { height: "0px" } }}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreSharp />}
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          minHeight: 0,
        }}
      >
        {icon}
        <Box ml={1}>{title}</Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0.5, pr: 2.5, pb: 1.5, pl: 2.5 }}>
        <Stack>{generateLinks()}</Stack>
      </AccordionDetails>
    </Accordion>
  );
}
