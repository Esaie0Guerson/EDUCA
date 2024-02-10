import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
    </div>
  );
}

export default App;
