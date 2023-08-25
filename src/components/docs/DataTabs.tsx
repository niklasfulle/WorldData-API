"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Code from "@/docs/Code";
import { v1, v2, v3, v4 } from "@/helpers/data-values";
import SimpleBar from "simplebar-react";
import { Button } from "@/ui/Button";
import Icons from "@/ui/Icons";

const DataTabs = () => {
  return (
    <Tabs defaultValue="v1" className="max-w-2xl w-full">
      <div className="flex justify-end md:justify-start">
        <TabsList className="hidden md:inline-flex">
          <div className="p-1 dark:hover:bg-slate-700 rounded-l-md">
            <TabsTrigger
              value="v1"
              id="v1Trigger"
              aria-controls="v1"
              aria-labelledby="v1 Trigger"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              V1
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700 ">
            <TabsTrigger
              value="v2"
              id="v2Trigger"
              aria-controls="v2"
              aria-labelledby="v2 Trigger"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              V2
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700">
            <TabsTrigger
              value="v3"
              id="v3Trigger"
              aria-controls="v3"
              aria-labelledby="v3 Trigger"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              V3
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700 rounded-r-md">
            <TabsTrigger
              value="v4"
              id="v4Trigger"
              aria-controls="v4"
              aria-labelledby="v4 Trigger"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              V4
            </TabsTrigger>
          </div>
        </TabsList>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden mr-1">
            <Button variant="ghost" size="sm" id="versionToggle" className="sm:mb-0">
              <Icons.PanelTopOpen className="h-6 w-6" />
              <span className="sr-only">Toggle data tab</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" forceMount className="md:hidden p-0">
            <TabsList className="flex-col p-0 md:hidden w-full">
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  value="v1"
                  id="v1TriggerDrop"
                  aria-controls="v1"
                  aria-labelledby="v1 TriggerDrop"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  V1
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  value="v2"
                  id="v2TriggerDrop"
                  aria-controls="v2"
                  aria-labelledby="v2 TriggerDrop"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  V2
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  value="v3"
                  id="v3TriggerDrop"
                  aria-controls="v3"
                  aria-labelledby="v3 TriggerDrop"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  V3
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  value="v4"
                  id="v4TriggerDrop"
                  aria-controls="v4"
                  aria-labelledby="v4 TriggerDrop"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  V4
                </TabsTrigger>
              </DropdownMenuItem>
            </TabsList>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <TabsContent
        value="v1"
        id="v1TabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="v1 TabContent"
      >
        <SimpleBar>
          <Code animated language="markup" code={v1} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="v2"
        id="v2TabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="v2 TabContent"
      >
        <SimpleBar>
          <Code animated language="markup" code={v2} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="v3"
        id="v3TabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="v3 TabContent"
      >
        <SimpleBar>
          <Code animated language="markup" code={v3} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="v4"
        id="v4TabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="v4 TabContent"
      >
        <SimpleBar>
          <Code animated language="markup" code={v4} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DataTabs;
