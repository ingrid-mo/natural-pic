import { Route, Routes } from "react-router-dom";
import "./app.css";
import Favoritos from "./view/Favoritos";
import NotFound from "./view/NotFound";
import Navegation from "./components/navbar";
import HomePage from "./view/HomePage";
import ContextProvider from "./context/ContextApi";

const App = () => {
  return (
    <>
      <Navegation />

      <ContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="card__seccion">
                <HomePage />
              </div>
            }
          />

          <Route
            path="/Favoritos"
            element={
              <div className="card__seccion">
                <Favoritos />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
