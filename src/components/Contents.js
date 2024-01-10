import { useParams } from "react-router-dom";

function Contents({ children }) {
  const params = useParams();
  console.log(params.language);

  return (
    <section>
      {children}
      저는 {`{children}`}의 상수형 컴포넌트 랍니다.
    </section>
  );
}

export default Contents;
