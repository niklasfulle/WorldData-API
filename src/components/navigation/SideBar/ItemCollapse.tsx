import Icons from "@/components/ui/Icons";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface ItemCollapseProps {
  mainTile: string;
  icon?: any;
  page: string;
  collapseTitle: {
    title: string;
    link: string;
    icon?: any;
  }[];
}

const ItemCollapse: FC<ItemCollapseProps> = ({ mainTile, icon, page, collapseTitle }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const searchParams = useSearchParams();

  const handleClick = (setOpen: Dispatch<SetStateAction<boolean>>, open: boolean) => {
    setOpen(!open);
  };

  useEffect(() => {
    if (mainTile.toLowerCase() === page) {
      const action = searchParams?.get("action");
      if (action) {
        setActive(action);
      }

      setOpen(true);
    }
  }, [mainTile, page, searchParams]);
  return (
    <>
      <ListItemButton
        onClick={() => handleClick(setOpen, open)}
        className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md "
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
              {active === item.title.toLowerCase() ? (
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="dark:hover:bg-slate-700 dark:bg-slate-700 hover:bg-slate-200 rounded-md h-11 my-1"
                >
                  {item.icon}
                  <ListItemText primary={item.title} className="ml-3" />
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md h-11 my-1"
                >
                  {item.icon}
                  <ListItemText primary={item.title} className="ml-3" />
                </ListItemButton>
              )}
            </Link>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default ItemCollapse;
