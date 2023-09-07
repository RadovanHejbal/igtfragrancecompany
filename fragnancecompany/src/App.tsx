import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const Favorites = lazy(() => import("./pages/Favorites"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Details = lazy(() => import("./pages/Details"));
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fragrances/:type" element={<Category product="fragrance" />} />
          <Route path="/fragrances" element={<Category product="fragrance" />} />
          <Route path="/flavors/:type" element={<Category product="flavor" />} />
          <Route path="/flavors" element={<Category product="flavor" />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
