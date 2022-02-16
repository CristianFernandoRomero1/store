import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './views/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
