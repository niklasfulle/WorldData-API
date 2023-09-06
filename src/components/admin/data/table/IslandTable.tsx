"use client";
import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import { useTheme } from "next-themes";

interface OcenasTableProps {
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
  { field: "col3", headerName: "Area Km²", width: 220 },
  { field: "col4", headerName: "Population", width: 220 },
  { field: "col5", headerName: "Continent", width: 220 },
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

const IslandsTable: FC<OcenasTableProps> = ({ data }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });

  const rows = data.map((island: any) => ({
    id: island.id,
    col1: island.id,
    col2: island.name,
    col3: `${island.area_km2} Km²`,
    col4: island.population,
    col5: island.continent,
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

export default IslandsTable;
