import { useParams } from "react-router-dom";
import contentnavi from "../data/navi.json";

function Contents({ children }) {
  const { languagess } = useParams();
  return (
    <section>
      {languagess} 사이트 입니다.
      {children}
      {contentnavi[languagess].navi.map((el) => {
        return el.d1text;
      })}
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
