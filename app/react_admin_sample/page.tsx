"use client";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../react_admin_sample/AdminReact"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <App />;
};

export default Home;
