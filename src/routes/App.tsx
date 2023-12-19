
import MainLayout from "../layouts/main";
import ChartPage from "../pages/chart";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/charts/" element={<ChartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
