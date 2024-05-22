import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Mycomponent from './components/Mycomponent';
import Payment from './components/Payment';
import Transactions from './components/Transaction';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Mycomponent />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
