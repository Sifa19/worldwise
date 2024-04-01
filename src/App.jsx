import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

import CityList from "./components/CityList";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "http://localhost:8000/";

  useEffect(function () {
    async function getCitiesData() {
      try {
        const res = await fetch(BASE_URL + "cities");
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (err) {
        console.log("this" + err);
      } finally {
        setIsLoading(false);
      }
    }

    getCitiesData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
