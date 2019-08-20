import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
// import AppRouter from "./components/AppRouter";
// import "semantic-ui-css/semantic.min.css";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path={'/'} exact component={WelcomePage} />
  <Route path={'/characters/:page'} exact component={CharacterList} />
  <Route path={'/locations/:page'} exact component={LocationList} />
  <Route path={'/episodes/:page'} exact component={EpisodeList} />
      {/* <AppRouter /> */}
    </main>
  );
}
