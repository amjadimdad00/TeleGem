import type { NextPage } from "next";

import Header from "./components/Header/Header";
import Player from "./components/Player/Player";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <Header />
        <Player />
      </div>
    </>
  );
};

export default Home;
