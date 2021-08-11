import { useEffect, useState } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { StepByStep } from "./components/Common/StepByStep/StepByStep";
import { Layouts } from "./components/Layouts";
import FieldOperations from "./features/FieldOperations/FieldOperations";
import News from "./features/News/News";
import Projects from "./features/Projects/Projects";
import "./styles/main.scss";

const Machine = {
  fieldOperations: {
    NEXT: "projects",
    PREV: "news",
  },
  projects: {
    NEXT: "news",
    PREV: "fieldOperations",
  },
  news: {
    NEXT: "fieldOperations",
    PREV: "projects",
  },
};

const MouseWheel = withRouter(({ history }) => {
  const [state, setState] = useState({ page: "fieldOperations" });
  const handleWheel = (e) => {
    console.log(e);
    const delta = Math.sign(e.deltaY);
    if (delta > 0) {
      setTimeout(() => {
        setState({ page: Machine[state.page]["NEXT"] });
        history.push(
          "/" + (state.page === "fieldOperations" ? "" : state.page)
        );
      }, 1400);
    } else {
      setTimeout(() => {
        setState({ page: Machine[state.page]["PREV"] });
        history.push(
          "/" + (state.page === "fieldOperations" ? "" : state.page)
        );
      }, 1400);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("mousewheel", handleWheel);
    return () => {
      window.removeEventListener("mousewheel", handleWheel);
    };
  });

  return null;
});
function App() {
  return (
    <Layouts>
      <BrowserRouter>
        <Route exact path="/">
          <FieldOperations />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <MouseWheel />
        <StepByStep />
      </BrowserRouter>
    </Layouts>
  );
}
export default App;
