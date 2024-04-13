import React, { Suspense, lazy, useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { FontsConfig } from "./fontsConfig";
import { loadFonts } from "./services/functions/functions";
import Loader from "./components/Loader";
import { LoadingOutlined } from "@ant-design/icons";

import { Navigate, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
const HomePage = lazy(() => import("./pages/Homepage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadFonts(FontsConfig)]);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        setLoading(false);
        setAppIsReady(true);
      }
    };

    fetchData();
  }, []);
  if (!appIsReady) {
    return <Loader isLoading={loading} />;
  }

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={`/web/guest/acceuil`} />} />
          <Route
            path={`/web/guest/acceuil`}
            element={
              <Suspense
                fallback={
                  <Spin
                    spinning
                    fullscreen
                    indicator={
                      <LoadingOutlined style={{ fontSize: 24 }} spin />
                    }
                  />
                }
              >
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path={`/web/guest/rooms`}
            element={
              <Suspense
                fallback={
                  <Spin
                    spinning
                    fullscreen
                    indicator={
                      <LoadingOutlined style={{ fontSize: 24 }} spin />
                    }
                  />
                }
              >
                <BookingPage />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
