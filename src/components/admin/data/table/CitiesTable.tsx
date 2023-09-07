"use client";
import React, { FC } from "react";
import { createTheme, ThemeProvider, Tooltip } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import Link from "next/link";
import Icons from "@/components/ui/Icons";

interface CitiesTableProps {
  data: any;
}

function CustomComponent(props: GridRenderEditCellParams) {
  const href = "/admin/data/cities/update/" + props.id;
  return (
    <Tooltip title="Edit" placement="right">
      <Link
        href={href}
        className="mx-2 rounded-full p-2 transition-all duration-150 ease-in hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        <Icons.Pencil />
      </Link>
    </Tooltip>
  );
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
  { field: "col5", headerName: "Country", width: 240 },
  {
    field: "col6",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    sortable: false,
    filterable: false,

    renderCell: (params: GridRenderEditCellParams) => (
      <CustomComponent {...params} />
    ),
  },
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

const CitiesTable: FC<CitiesTableProps> = ({ data }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });

  const rows = data.map((city: any) => ({
    id: city.id,
    col1: city.id,
    col2: city.name,
    col3: `${city.area_km2} Km²`,
    col4: city.population,
    col5: city.country,
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

export default CitiesTable;
