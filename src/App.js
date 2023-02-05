import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import ViewEmployee from './Components/ViewEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<ViewEmployee/>}/>
      <Route path='/addemployee' exact element={<AddEmployee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
