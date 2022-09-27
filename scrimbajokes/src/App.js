import React from "react";
import Header from "./components/header";
import Jokes from "./components/jokes";
import jokesData from "./jokesData";

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
    })
  return (
    <div>
        <Header />
        <section className="jokeLists">
        {jokeElements}
        </section>
    </div>

  );
}

export default App;
