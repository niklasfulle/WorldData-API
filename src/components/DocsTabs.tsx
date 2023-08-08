"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/components/Code";
import { go, javascript, python } from "@/helpers/code-values";
import SimpleBar from "simplebar-react";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger
          id="nodejsTrigger"
          aria-controls="nodejs"
          aria-labelledby="nodejs Trigger"
          value="nodejs"
        >
          NodeJs
        </TabsTrigger>
        <TabsTrigger
          id="pythonTrigger"
          aria-controls="python"
          aria-labelledby="python Trigger"
          value="python"
        >
          Python
        </TabsTrigger>
        <TabsTrigger id="goTrigger" aria-controls="go" aria-labelledby="go Trigger" value="go">
          Go
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="nodejs"
        id="nodejsTabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="nodejs Content"
      >
        <SimpleBar>
          <Code animated language="javascript" code={javascript} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="python"
        id="pythonTabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="python Content"
      >
        <SimpleBar>
          <Code animated language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent
        value="go"
        id="goTabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="go Content"
      >
        <SimpleBar>
          <Code animated language="go" code={go} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
