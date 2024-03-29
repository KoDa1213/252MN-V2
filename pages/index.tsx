import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import { Roadmap } from "@components";
import { PageLayout } from "layouts";
import Sidebar from "components/sidebar";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const Home: NextPage = () => {
  const [filter, setFilter] = useState();
  return (
    <PageLayout title="Next Home page">
      <ScrollToTop 
      smooth 
      color="#de2d37"
      svgPath="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
      l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
      C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      width="18"
      height="18"
      viewBox="0 0 330 330"
      top={900}/>
      <Sidebar onFilter={setFilter}/>
      <Roadmap filter={filter}/>
    </PageLayout>
  );
};

export default Home;
