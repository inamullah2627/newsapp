
import './App.css';

import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=10;
  const apiKey = process.env.REACT_APP_NEWS_API
  // "a0f183fdbf3a48beb52cbcbed3223844"
 const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element = {<News setProgress={setProgress} apiKey={apiKey}   key="General" pageSize={pageSize} country='in' category="General"/>}/>
          <Route exact path="/business" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Business" pageSize={pageSize} country='in' category="Business"/>}/>
          <Route exact path="/sports" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Sports" pageSize={pageSize} country='in' category="Sports"/>}/>
          <Route exact path="/entertainment" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Entertainment" pageSize={pageSize} country='in' category="Entertainment"/>}/>
          <Route exact path="/health" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Health" pageSize={pageSize} country='in' category="Health"/>}/>
          <Route exact path="/science" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Science" pageSize={pageSize} country='in' category="Science"/>}/>
          <Route exact path="/technology" element = {<News setProgress={setProgress} apiKey={apiKey}   key="Technology" pageSize={pageSize} country='in' category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
        {/* <NavBar/>
        <News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country='in' category='technology'/> */}
      </div>
    )
}

export default App;