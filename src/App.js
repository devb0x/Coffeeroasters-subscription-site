import React, {Fragment} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/footer/Footer"

import HeroBanner from "./components/homepage/HeroBanner/HeroBanner"
import Collection from "./components/homepage/Collection/Collection"
import Why from "./components/homepage/Why/Why"
import How from "./components/homepage/How/How"

import Commitment from "./components/AboutUs/Commitment/Commitment"
import Headquarters from "./components/AboutUs/Headquarters/Headquarters"
import Quality from "./components/AboutUs/Quality/Quality"
import AboutBanner from "./components/AboutUs/AboutBanner/AboutBanner"
import SubscribeBanner from "./components/Subscribe/SubscribeBanner/SubscribeBanner"
import SubscribeForm from "./components/Subscribe/SubscribeForm/SubscribeForm/SubscribeForm"

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route
              exact path={"/"}
              element={ <Navigate to="/homepage" /> }
            />
            <Route
              exact path={"/homepage"}
              element={
                <Fragment>
                  <HeroBanner />
                  <Collection />
                  <Why />
                  <How />
                </Fragment>
              }
            />
            <Route
              exact path={"/about-us"}
              element={
                <Fragment>
                  <AboutBanner />
                  <Commitment />
                  <Quality />
                  <Headquarters />
                </Fragment>
              }
            />
            <Route
              exact path={"/subscribe"}
              element={
                <Fragment>
                  <SubscribeBanner />
                  <How />
                  <SubscribeForm />
                </Fragment>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
