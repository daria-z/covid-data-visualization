import React from "react";
import { Country } from "./src/Country";
import { Tabs } from "./src/Country/Tabs";
import { CountrySelect } from "./src/CountrySelect";
import { Layout } from "./src/Layout";
import { RankedCharts } from "./src/RankedCharts";
import { ReportedCases } from "./src/ReportedCases";

export const App = () => {
  return (
    <Layout>
      <CountrySelect />
      <Country />
    </Layout>
  );
};

// опиши структуру данных
