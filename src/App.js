import './App.css';
import Main from './components/Main';
import Navbar from './components/NavBar';

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <Navbar/>
        
        <Main/>
      </div>
    </div>
  );
}

export default App;
