import Icons from "@/components/ui/Icons";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface ItemCollapseProps {
  mainTile: string;
  icon?: any;
  collapseTitle: {
    title: string;
    link: string;
    icon?: any;
  }[];
}

const ItemCollapse: FC<ItemCollapseProps> = ({ mainTile, icon, collapseTitle }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (setOpen: Dispatch<SetStateAction<boolean>>, open: boolean) => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton
        onClick={() => handleClick(setOpen, open)}
        className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md"
      >
        {icon}
        <ListItemText primary={mainTile} className="ml-3" />

        {open ? (
          <Icons.ChevronUp className="active:rotate-180 transition-all ease-in duration-100" />
        ) : (
          <Icons.ChevronDown className="active:rotate-180 transition-all ease-in duration-100" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapseTitle.map((item, index) => (
          <List component="div" disablePadding key={index}>
            <Link href={item.link}>
              <ListItemButton
                sx={{ pl: 4 }}
                className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md"
              >
                {item.icon}
                <ListItemText primary={item.title} className="ml-3" />
              </ListItemButton>
            </Link>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default ItemCollapse;
