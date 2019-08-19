import React from "react";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
