
import Header from "./components/Header";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="movies/:id" element={<SingleMovie/>}   />
        
      </Routes>
     
    </>
  );
}

export default App;
