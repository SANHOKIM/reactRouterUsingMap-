import React from "react";

function Contents({ children }) {
  return (
    <section>
      {children}
      저는 {`{children}`}의 상수형 컴포넌트 랍니다.
    </section>
  );
}

export default Contents;
