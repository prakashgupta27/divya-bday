import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BirthdaySurprise from "./component/birthdayLandingPage";
import BirthdayImage from "./component/Image";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdaySurprise />} />
        <Route path="/its_Your_birthday" element={<BirthdayImage />} />

      </Routes>
    </Router>
  );
}

export default App;
