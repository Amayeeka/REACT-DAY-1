// src/App.jsx

import './App.css';
import Header from './components/Header';
import PopularSites from './components/PopularSites';
import AlertBox from './components/AlertBox';
import CurrentYear from './components/CurrentYearComp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <div className="app-hero">
          <h1>Hello World</h1>
          <p>A React learning project — components, JSX, and clean structure.</p>
        </div>
        <PopularSites /> 
        <AlertBox />  
        <CurrentYear />
      </main>

      <Footer />
    </div>
  );
}

export default App;
