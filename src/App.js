import './App.css';
import Signing from './components/Signing';
import Dashboard from './components/Dashboard';
import Verification from './components/Verification';
import Message from './components/Message';
import Overview from './components/Overview';
import Settings from './components/Settings';
import Report from './components/Report';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signing/>} />
          <Route path="/dashboard" element={<Dashboard/>} >
            <Route path="/dashboard" element={<Overview/>} />
            <Route path="/dashboard/verification" element={<Verification/>} />
            <Route path="/dashboard/message" element={<Message/>} />
            <Route path="/dashboard/settings" element={<Settings/>} />
            <Route path="/dashboard/report" element={<Report/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


