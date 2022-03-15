import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Dragons from './pages/Dragons';
import { Provider } from 'react-redux';
import elementStore from './redux/configureStore'

const App = () => (
  <Provider store={elementStore}>
    <Header />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dragons" element={<Dragons />} />
    </Routes>
  </Provider>
);

export default App;
