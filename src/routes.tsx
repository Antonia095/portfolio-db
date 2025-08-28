import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sobre from './pages/Sobre';
import Curriculo from './pages/Curriculo';
import Projetos from './pages/Projetos';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Sobre />} />
      <Route path="/curriculo" element={<Curriculo />} />
      <Route path="/projetos" element={<Projetos />} />
    </Routes>
  </Router>
);

export default AppRoutes;
