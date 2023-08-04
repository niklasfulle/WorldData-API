"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/components/Code";
import { v1, v2, v3 } from "@/helpers/data-values";
import SimpleBar from "simplebar-react";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="v1" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="v1">v1</TabsTrigger>
        <TabsTrigger value="v2">v2</TabsTrigger>
        <TabsTrigger value="v3">v3</TabsTrigger>
      </TabsList>
      <TabsContent value="v1" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="markup" code={v1} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="v2" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="markup" code={v2} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="v3" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="markup" code={v3} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
