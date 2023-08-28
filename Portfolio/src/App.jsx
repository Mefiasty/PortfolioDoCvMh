import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Omnie from "./pages/Omnie";
import Projekty from "./pages/Projekty";
import CV from "./pages/CV";
import NoPage from "./pages/NoPage";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Omnie />} />
          <Route path="projekty" element={<Projekty />} />
          <Route path="CV" element={<CV />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);