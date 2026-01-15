import { NavBar, PackedComp } from './components';
import { useEffect } from 'react';

import appConfig from '../app.config';

const App = () => {

  useEffect(() => {
    document.title = `${appConfig.ownerName}'s Page`;
  }, []);

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
