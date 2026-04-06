import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import TvShows from "../pages/TVShows";
import Actors from "../pages/Actors";
import ContactUs from "../pages/ContactUs";
import Search from "../components/Search";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="actors" element={<Actors />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
