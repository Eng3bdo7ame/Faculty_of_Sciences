import "./App.css";
import { Routes, Route } from "react-router-dom";
import Aside from "./componant/intro_window/Aside";
import Subject from "./componant/intro_window/subject_side";
import Content from "./componant/intro_window/content";
import Navbar from "./componant/intro_window/Navbar";
import Login from "./componant/student_login";
import Notices from "./componant/notices";
import Chating from "./componant/chating";
import ChatingBox from "./componant/chating_box";
import Groups from "./componant/Groups";
import Portfolio from "./componant/portfolio";
import Details from "./componant/subject_details";
import Events from "./componant/Events";

function App() {
  return (
    <div>
      <Navbar />
      <Aside></Aside>
      <Subject></Subject>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Content" element={<Content />} />
        <Route path="Notices" element={<Notices />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Chating" element={<Chating />} />
        <Route path="ChatingBox" element={<ChatingBox />} />
        <Route path="Groups" element={<Groups />} />
        <Route path="Details" element={<Details />} />
        <Route path="Events" element={<Events />} />
      </Routes>
    </div>
  );
}
export default App;
