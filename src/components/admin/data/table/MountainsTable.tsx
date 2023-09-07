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

interface MountainsTableProps {
  data: any;
}

function CustomComponent(props: GridRenderEditCellParams) {
  const href = "/admin/data/mountains/update/" + props.id;
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
    width: 380,
  },
  { field: "col3", headerName: "Height m", width: 220 },
  { field: "col4", headerName: "Continent", width: 220 },
  { field: "col5", headerName: "First Climbed", width: 220 },
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

const MountainsTable: FC<MountainsTableProps> = ({ data }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });

  const rows = data.map((mountain: any) => ({
    id: mountain.id,
    col1: mountain.id,
    col2: mountain.name,
    col3: `${mountain.height_m} m`,
    col4: mountain.continent,
    col5: mountain.first_climbed,
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

export default MountainsTable;
