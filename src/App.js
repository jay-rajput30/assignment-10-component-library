import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ComponentView from "./pages/ComponentView/ComponentView";
import Components from "./pages/Components/Components";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/componentview" element={<ComponentView />} />
      </Routes>
    </div>
  );
}
