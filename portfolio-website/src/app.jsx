import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projekti from './projekti'
import Home from './o-meni'
import Kontakt from './kontakt'

const App = () => {
    return (
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route id="projekt" path="/projekti" element={<Projekti />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
}

export default App;
