import React from "react";
import { Country } from "./src/Country";
import { Tabs } from "./src/Country/Tabs";
import { Layout } from "./src/Layout";
import { RankedCharts } from "./src/RankedCharts";
import { ReportedCases } from "./src/ReportedCases";

export const App = () => {
  return (
    <Layout>
      <div>Country Select</div>
      <Country />
    </Layout>
  );
};
