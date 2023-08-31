import Icons from "@/ui/Icons";
import { Collapse, ListItemButton, ListItemText, List } from "@mui/material";
import Link from "next/link";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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

const ItemCollapse: FC<ItemCollapseProps> = ({
  mainTile,
  icon,
  page,
  collapseTitle,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const searchParams = useSearchParams();

  const handleClick = (
    setOpen: Dispatch<SetStateAction<boolean>>,
    open: boolean
  ) => {
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
        className="rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        {icon}
        <ListItemText primary={mainTile} className="ml-2 xl:ml-2" />

        {open ? (
          <Icons.ChevronUp className="transition-all duration-100 ease-in active:rotate-180" />
        ) : (
          <Icons.ChevronDown className="transition-all duration-100 ease-in active:rotate-180" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapseTitle.map((item, index) => (
          <List component="div" disablePadding key={index}>
            <Link href={item.link}>
              {active === item.title.toLowerCase() ? (
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="my-1 h-11 rounded-md px-2 pl-4 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-700 lg:pl-8"
                >
                  {item.icon}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="my-1 h-11 rounded-md pl-4 pr-2 hover:bg-slate-200 dark:hover:bg-slate-700 lg:pl-8"
                >
                  {item.icon}
                  <ListItemText primary={item.title} />
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
