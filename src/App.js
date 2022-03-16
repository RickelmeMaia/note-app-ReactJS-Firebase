import { BrowserRouter as Router,  Routes,  Route,  Link} from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import NewNotes from "./pages/NewNotes";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
        <div className="App">
        <TopBar/>
          <div className="mainContainer">
            <SideBar/>            
            <div className="contentContainer">
              <Routes>
                <Route path="/allNotes" element={<AllNotes/>}/>
                <Route path="/newNotes" element={<NewNotes/>}/>
              </Routes>
            </div>
          </div>    
        </div>
    </Router>
  );
}

export default App;
