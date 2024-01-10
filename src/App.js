import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// import navi from "./data/navi.json";
import Contents from "./components/Contents";

function App() {
  // navi.json 파일로 넘기기
  const navi = [
    {
      d1text: "한국어",
      cls: "naver",
      href: "kr",
    },
    {
      d1text: "영어",
      cls: "daum",
      href: "en",
    },
  ];
  return (
    <div className="App">
      <header>
        {/* {navi.map((el) => {
          return <Link to={`/kr/${el.href}`}>{el.d1text}</Link>;
        })} */}

        {navi.map((el, idx) => {
          return (
            <Link to={`/${el.href}`} key={`navi${idx}`}>
              {el.d1text}
            </Link>
          );
        })}
      </header>

      <section>
        <Routes>
          <Route
            path="/:languagess"
            element={
              <Contents p="App.js.Contents.p태그///">
                <p>App.js.Contents.p태그 </p>
              </Contents>
            }
          ></Route>
        </Routes>
      </section>
    </div>
  );
}
export default App;
