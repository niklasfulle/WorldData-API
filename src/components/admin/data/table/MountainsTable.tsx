/* eslint-disable no-unused-vars */
/* eslint-disable no-undef*/
/* eslint-disable no-empty*/
"use client";
import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import { ApiRequest } from "@prisma/client";
import { useTheme } from "next-themes";

type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
  timestamp: string;
};

interface OcenasTableProps {
  //userRequests: ModifiedRequestType<"timestamp">[];
  data: any;
}

const columnsDraft: GridColDef[] = [
  {
    field: "col1",
    headerName: "API key used",
    width: 300,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName} </strong>
      );
    },
  },
  { field: "col2", headerName: "Path", width: 250 },
  { field: "col3", headerName: "Recency", width: 250 },
  { field: "col4", headerName: "Duration", width: 150 },
  { field: "col5", headerName: "Status", width: 100 },
  { field: "col6", headerName: "Response", width: 170 },
];

const columns = columnsDraft.map((col) => {
  if (col.field === "col1") {
    return col;
  }

  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  };
});

const MountainsTable: FC<OcenasTableProps> = ({ data }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });

  /*const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.usedApiKey,
    col2: request.path,
    col3: `${request.timestamp} ago`,
    col4: `${request.duration} ms`,
    col5: request.status,
    col6: request.response,
  }));*/
  return (
    <ThemeProvider theme={darkTheme}>
      <DataGrid
        style={{
          backgroundColor: applicationTheme === "light" ? "white" : "#152238",
          fontSize: "1rem",
          marginBottom: "3rem",
        }}
        className="shadow-md backdrop-blur-md"
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        columns={[]}
        rows={[]}
      />
    </ThemeProvider>
  );
};

export default MountainsTable;
