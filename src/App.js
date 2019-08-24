import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import TabNav from "./components/TabNav.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/locations" component={LocationList}/>
      <Route path="/episodes" component={EpisodeList}/>
    </main>
  );
}
