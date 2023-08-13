"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/docs/Code";
import { v1, v2, v3 } from "@/helpers/data-values";
import SimpleBar from "simplebar-react";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="v1" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="v1" id="v1Trigger" aria-controls="v1" aria-labelledby="v1 Trigger">
          v1
        </TabsTrigger>
        {/*<TabsTrigger value="v2">v2</TabsTrigger>*/}
        {/*<TabsTrigger value="v3">v3</TabsTrigger>*/}
      </TabsList>
      <TabsContent
        value="v1"
        id="v1TabContent"
        className="lg:mb-24 mb-4"
        aria-labelledby="v1 Content"
      >
        <SimpleBar>
          <Code animated language="markup" code={v1} show />
        </SimpleBar>
      </TabsContent>
      {/*<TabsContent value="v2" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="markup" code={v2} show />
        </SimpleBar>
      </TabsContent>*/}
      {/* <TabsContent value="v3" className="lg:mb-24 mb-4">
        <SimpleBar>
          <Code animated language="markup" code={v3} show />
        </SimpleBar>
      </TabsContent>*/}
    </Tabs>
  );
};

export default DocumentationTabs;
