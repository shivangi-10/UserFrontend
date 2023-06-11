import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddForm } from "./components/AddForm";
import { TableView } from "./components/TableView";
import { ViewUser } from "./components/ViewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TableView/>} />
          <Route path="/view" element={<ViewUser/>} />
          <Route path="/form" element={<AddForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
