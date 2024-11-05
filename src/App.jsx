import "./App.css";
import Dashboard from "./components/pageComponents/Dashboard";
import { DataProvider } from "./context/DataContext";
import ProfileCard from "./components/layerComponents/ProfileCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<ProfileCard />} />{" "}
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
