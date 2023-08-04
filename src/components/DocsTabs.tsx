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
        <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="go">Go</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="javascript" code={javascript} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="go" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="go" code={go} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
