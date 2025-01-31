import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  const [locale, setLocale] = useState("th"); // Default to Thailand
  const [data, setData] = useState(null);

  // Detect domain and set locale
  useEffect(() => {
    const hostname = window.location.hostname;
    if (hostname.includes(".vn")) {
      setLocale("vn");
    } else {
      setLocale("th");
    }
  }, []);

  // Fetch data from backend API
  useEffect(() => {
    const apiUrl = config[locale].apiUrl;
    axios
      .get(`${apiUrl}/api/data`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [locale]);

  return (
    <div className="App">
      <Header locale={locale} />
      <main>
        <Home locale={locale} data={data} />
        <About locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

export default App;