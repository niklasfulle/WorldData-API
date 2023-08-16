"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/docs/Code";
import { go, javascript, python, rust, kotlin, csharp } from "@/helpers/code-values";
import SimpleBar from "simplebar-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { Button } from "@/ui/Button";
import Icons from "@/ui/Icons";
import CopyIcon from "@/docs/CopyIcon";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <div className="flex justify-end md:justify-start">
        <TabsList className="hidden md:inline-flex">
          <div className="p-1 dark:hover:bg-slate-700 rounded-l-md">
            <TabsTrigger
              id="nodejsTrigger"
              aria-controls="nodejs"
              aria-labelledby="nodejs Trigger"
              value="nodejs"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              NodeJs
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700">
            <TabsTrigger
              id="pythonTrigger"
              aria-controls="python"
              aria-labelledby="python Trigger"
              value="python"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              Python
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700">
            <TabsTrigger
              id="goTrigger"
              aria-controls="go"
              aria-labelledby="go Trigger"
              value="go"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              Go
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700">
            <TabsTrigger
              id="rustTrigger"
              aria-controls="rust"
              aria-labelledby="rust Trigger"
              value="rust"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              Rust
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700">
            <TabsTrigger
              id="kotlinTrigger"
              aria-controls="kotlin"
              aria-labelledby="kotlin Trigger"
              value="kotlin"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              Kotlin
            </TabsTrigger>
          </div>
          <div className="p-1 dark:hover:bg-slate-700 rounded-r-md">
            <TabsTrigger
              id="csharpTrigger"
              aria-controls="csharp"
              aria-labelledby="csharp Trigger"
              value="csharp"
              className="min-w-[95px] hover:bg-slate-300 data-[state=active]:bg-slate-300"
            >
              C#
            </TabsTrigger>
          </div>
        </TabsList>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden mr-1">
            <Button variant="ghost" size="sm" id="codeToggle" className="sm:mb-0">
              <Icons.PanelTopOpen className="h-6 w-6" />
              <span className="sr-only">Toggle doc tab</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" forceMount className="md:hidden p-0">
            <TabsList className="flex-col p-0 md:hidden w-full">
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="nodejsTrigger"
                  aria-controls="nodejs"
                  aria-labelledby="nodejs Trigger"
                  value="nodejs"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  NodeJs
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="pythonTrigger"
                  aria-controls="python"
                  aria-labelledby="python Trigger"
                  value="python"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  Python
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="goTrigger"
                  aria-controls="go"
                  aria-labelledby="go Trigger"
                  value="go"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  Go
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="rustTrigger"
                  aria-controls="rust"
                  aria-labelledby="rust Trigger"
                  value="rust"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  Rust
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="kotlinTrigger"
                  aria-controls="kotlin"
                  aria-labelledby="kotlin Trigger"
                  value="kotlin"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  Kotlin
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="csharpTrigger"
                  aria-controls="csharp"
                  aria-labelledby="csharp Trigger"
                  value="csharp"
                  className="w-full hover:bg-slate-300 data-[state=active]:bg-slate-300"
                >
                  C#
                </TabsTrigger>
              </DropdownMenuItem>
            </TabsList>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <TabsContent
        value="nodejs"
        id="nodejsTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="nodejs Content"
      >
        <SimpleBar>
          <CopyIcon copyText={javascript} />
          <Code animated language="javascript" code={javascript} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="python"
        id="pythonTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="python Content"
      >
        <SimpleBar>
          <CopyIcon copyText={python} />
          <Code animated language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="go"
        id="goTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="go Content"
      >
        <SimpleBar>
          <CopyIcon copyText={go} />
          <Code animated language="go" code={go} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="rust"
        id="rustTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="rust Content"
      >
        <SimpleBar>
          <CopyIcon copyText={rust} />
          {/* @ts-ignore*/}
          <Code animated language="rust" code={rust} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="kotlin"
        id="kotlinTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="kotlin Content"
      >
        <SimpleBar>
          <CopyIcon copyText={kotlin} />
          {/* @ts-ignore*/}
          <Code animated language="kotlin" code={kotlin} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="csharp"
        id="csharpTabContent"
        className="lg:mb-24 mb-4 px-4 py-3"
        aria-labelledby="csharp Content"
      >
        <SimpleBar>
          <CopyIcon copyText={csharp} />
          {/* @ts-ignore*/}
          <Code animated language="csharp" code={csharp} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
