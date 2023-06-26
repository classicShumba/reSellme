import './App.scss'
// import Home from './Pages/Home';
import NavBar from './components/navBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from './components/Footer';

const Home = lazy(() => import('./Pages/Home'))

function App() {
  return (
    <Suspense>
      <Router>
        <div className='app'>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Suspense>
  )
}

export default App
