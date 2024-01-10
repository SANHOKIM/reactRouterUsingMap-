import { useParams } from "react-router-dom";
import contentnavi from "../data/navi.json";

function Contents({ children }) {
  const { languagess } = useParams();

  return (
    <section>
      {languagess}
      {children}
    </section>
  );
}

export default Contents;
