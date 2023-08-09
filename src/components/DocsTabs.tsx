"use client";
import { FC } from "react";
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
          <DropdownMenuTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="sm" id="themeToggle" className="sm:mb-0 -mb-1">
              <Icons.Menu className="h-6 w-6" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" forceMount className="sm:hidden">
            <TabsList className="flex-col p-0 sm:hidden">
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="nodejsTrigger"
                  aria-controls="nodejs"
                  aria-labelledby="nodejs Trigger"
                  value="nodejs"
                >
                  NodeJs
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="pythonTrigger"
                  aria-controls="python"
                  aria-labelledby="python Trigger"
                  value="python"
                >
                  Python
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="goTrigger"
                  aria-controls="go"
                  aria-labelledby="go Trigger"
                  value="go"
                >
                  Go
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="rustTrigger"
                  aria-controls="rust"
                  aria-labelledby="rust Trigger"
                  value="rust"
                >
                  Rust
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="kotlinTrigger"
                  aria-controls="kotlin"
                  aria-labelledby="kotlin Trigger"
                  value="kotlin"
                >
                  Kotlin
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <TabsTrigger
                  id="csharpTrigger"
                  aria-controls="csharp"
                  aria-labelledby="csharp Trigger"
                  value="csharp"
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
          {/* @ts-ignore*/}
          <Code animated language="csharp" code={csharp} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
