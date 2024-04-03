import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./index.css";

import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

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
              element={<Navigate replace to="cities" />}
              // element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:city" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
