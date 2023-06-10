// components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SectionMiddle from './components/SectionMiddle';

// css
import './App.css';




function App() {
  return (
    <div className='container'>
      <aside>
        <Sidebar />
      </aside>

      <main className='main-content'>
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
