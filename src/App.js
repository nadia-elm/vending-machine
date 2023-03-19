import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import VendingMachine from './VendingMachine';
import SingleSnack from './SingleSnack';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<VendingMachine />}></Route>
        <Route exact path ="snack/:id" element={<SingleSnack />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
