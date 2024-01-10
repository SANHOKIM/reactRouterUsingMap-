import React from "react";
import { Routes, Route } from "react-router-dom";

import Contents from "./Contents";

function Section() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<h1>저는 그냥 첫화면</h1>}></Route>
        <Route
          path="/:pageid"
          element={
            <Contents p="App.js.Contents.p속성">
              <p>Naver</p>
            </Contents>
          }
        ></Route>
      </Routes>
    </section>
  );
}

export default Section;
