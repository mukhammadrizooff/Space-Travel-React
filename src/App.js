import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  // <Provider store={store}>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  // </Provider>
);

export default App;
