import { useParams } from "react-router-dom";

import navi from "../data/navi.json";

function Contents({ children, p }) {
  const { pageid } = useParams();
  return (
    <section>
      {pageid} 페이지
      {children}
      {p}
      <h2> {navi.kr.navi[pageid]["ex"]}</h2>
    </section>
  );
  // return (
  //   <section>
  //     {languagess}
  //     {children}
  //   </section>
  // );
}

export default Contents;
