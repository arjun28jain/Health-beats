import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop4 from "./pages/Desktop4";
import Desktop3 from "./pages/Desktop3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/desktop2" element={<Desktop2 />} />
      <Route path="/desktop4" element={<Desktop4 />} />
      <Route path="/desktop3" element={<Desktop3 />} />
    </Routes>
  );
}
export default App;
