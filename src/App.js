
import Header from "./Header";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
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
