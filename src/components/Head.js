import React from "react";
import { Link } from "react-router-dom";

import navi from "../data/navi.json";

function Head() {
  return (
    <header>
      {navi.kr.navi.map((el, idx) => {
        return (
          <Link to={`/${idx}`} key={`navi${idx}`}>
            {el.d1text}
          </Link>
        );
      })}
    </header>
  );
}

export default Head;
