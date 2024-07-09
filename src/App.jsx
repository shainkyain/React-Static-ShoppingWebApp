import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Details from "./component/Details";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex">
      
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-400 absolute left-[17%] top-[3%]">
              home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
