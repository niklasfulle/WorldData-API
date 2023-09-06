"use client";
import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import { useTheme } from "next-themes";

interface ContinentsTableProps {
  data: any;
}

const columnsDraft: GridColDef[] = [
  {
    field: "col1",
    headerName: "Id",
    width: 100,
  },
  {
    field: "col2",
    headerName: "Name",
    width: 350,
  },
  { field: "col3", headerName: "Type", width: 220 },
  { field: "col4", headerName: "Diameter Km", width: 220 },
  { field: "col5", headerName: "Tilt Degrees", width: 220 },
  { field: "col6", headerName: "Actions", width: 170, headerAlign: "center" },
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

const CelestialBodiesTable: FC<ContinentsTableProps> = ({ data }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });

  const rows = data.map((celestialBodie: any) => ({
    id: celestialBodie.id,
    col1: celestialBodie.id,
    col2: celestialBodie.name,
    col3: celestialBodie.type,
    col4: celestialBodie.diameter_km,
    col5: `${celestialBodie.tilt_degrees} °`,
    col6: "",
  }));

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
        columns={columns}
        rows={rows}
      />
    </ThemeProvider>
  );
};

export default CelestialBodiesTable;
