import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Dragons from './pages/Dragons';

const App = () => (
  // <Provider store={store}>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dragons" element={<Dragons />} />
    </Routes>
  </BrowserRouter>
  // </Provider>
);

export default App;
