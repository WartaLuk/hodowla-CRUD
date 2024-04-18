import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import "./variables.scss";

// import routes
import Home from "./components/Pages/Home/Home";
import Puppies from "./components/Pages/Puppies/Puppies";
import Contact from "./components/Pages/Contact/Contact";
import Dogs from "./components/Pages/Dogs/Dogs";
import About from "./components/Pages/About/About";

const App = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/nasze-psy" element={<Dogs />} />
      <Route path="/nasze-szczeniaki" element={<Puppies />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </MainLayout>
);

export default App;
