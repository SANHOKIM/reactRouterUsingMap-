import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import navi from "./data/navi.json";
import Contents from "./components/Contents";

function App() {
  /*  navi.json 파일로 넘기기 
  const navi = [
    {
      d1text: "네이버",
      cls: "naver",
      href: "naver",
    },
    {
      d1text: "다음",
      cls: "daum",
      href: "daum",
    },
  ]; */
  return (
    <div className="App">
      <header>
        {navi.map((el, idx) => {
          return <Link to={`/kr/${el.href}`}>{el.d1text}</Link>;
        })}
      </header>
      <section>
        <Routes>
          <Route
            path="/kr/naver"
            element={
              <Contents>
                <p>나 한국어로</p>
              </Contents>
            }
          ></Route>
          <Route
            path="/kr/daum"
            element={
              <Contents>
                <p>나 영어로</p>
              </Contents>
            }
          ></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
