import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTER } from "./router/router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path={ROUTER.HOME_ROUTE} element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
