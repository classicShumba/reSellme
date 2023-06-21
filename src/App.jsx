import './App.scss'
// import Home from './Pages/Home';
import NavBar from './components/navBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

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
        </div>
      </Router>
    </Suspense>
  )
}

export default App
