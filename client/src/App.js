import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Shop from "./pages/Shop";
import NavBar from "./components/NavBar";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
