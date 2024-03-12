import AbsenceHome from "./pages/AbsenceHome";
import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appel from "./pages/Appel";
import Graphes from "./components/Graphes";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<AbsenceHome />} />
            <Route path="/graphes" element={<Graphes />} />
            <Route path="/faire-appel" element={<Appel />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
