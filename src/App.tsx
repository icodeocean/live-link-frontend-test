import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"

import Header from "./components/Header";
import Detail from "./pages/Detail";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="bg-primary h-full py-12 px-10 text-black">
      <Router>
        <Header />
        <div className="mt-6">
          <Routes>
            <Route path='/' Component={Feed} />
          </Routes>
          <Routes>
            <Route path='/detail/:id' Component={Detail} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
