import { NavBar, PackedComp } from './components';

const App = () => {
  
  return (
    <div className="w-100 min-vh-100 vh-100 text-light">
      <NavBar />
      <div className="w-100">
        <PackedComp />
      </div>
    </div>
  );
}

export default App
