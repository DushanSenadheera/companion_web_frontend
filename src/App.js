import './App.css';
import Signing from './components/Signing';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


