"use client";
import { FC, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/components/Code";
import { go, javascript, python, rust, kotlin, csharp } from "@/helpers/code-values";
import SimpleBar from "simplebar-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/ui/Button";
import Icons from "./Icons";
import CopyIcon from "./CopyIcon";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <div className="flex justify-end sm:justify-start">
        <TabsList className="hidden sm:inline-flex">
          <TabsTrigger
            id="nodejsTrigger"
            aria-controls="nodejs"
            aria-labelledby="nodejs Trigger"
            value="nodejs"
            className="min-w-[95px]"
          >
            NodeJs
          </TabsTrigger>
          <TabsTrigger
            id="pythonTrigger"
            aria-controls="python"
            aria-labelledby="python Trigger"
            value="python"
            className="min-w-[95px]"
          >
            Python
          </TabsTrigger>
          <TabsTrigger
            id="goTrigger"
            aria-controls="go"
            aria-labelledby="go Trigger"
            value="go"
            className="min-w-[95px]"
          >
            Go
          </TabsTrigger>
          <TabsTrigger
            id="rustTrigger"
            aria-controls="rust"
            aria-labelledby="rust Trigger"
            value="rust"
            className="min-w-[95px]"
          >
            Rust
          </TabsTrigger>
          <TabsTrigger
            id="kotlinTrigger"
            aria-controls="kotlin"
            aria-labelledby="kotlin Trigger"
            value="kotlin"
            className="min-w-[95px]"
          >
            Kotlin
          </TabsTrigger>
          <TabsTrigger
            id="csharpTrigger"
            aria-controls="csharp"
            aria-labelledby="csharp Trigger"
            value="csharp"
            className="min-w-[95px]"
          >
            C#
          </TabsTrigger>
        </TabsList>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="sm:hidden mr-1">
            <Button variant="ghost" size="sm" id="themeToggle" className="sm:mb-0">
              <Icons.PanelTopOpen className="h-6 w-6" />
              <span className="sr-only">Toggle doc tab</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" forceMount className="sm:hidden p-0">
            <TabsList className="flex-col p-0 sm:hidden w-full">
              <DropdownMenuItem className="hover:cursor-pointer w-full flex justify-center p-1">
                <TabsTrigger
                  id="nodejsTrigger"
                  aria-controls="nodejs"
                  aria-labelledby="nodejs Trigger"
                  value="nodejs"
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full"
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
