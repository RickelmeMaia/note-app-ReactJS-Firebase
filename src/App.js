import { BrowserRouter as Router,  Routes,  Route,  Link} from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import NewPosts from "./pages/NewPosts";
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
                <Route path="/allPosts" element={<AllPosts/>}/>
                <Route path="/newPosts" element={<NewPosts/>}/>
              </Routes>
            </div>
          </div>    
        </div>
    </Router>
  );
}

export default App;
