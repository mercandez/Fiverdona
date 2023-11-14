import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import ServiceSearchPage from './pages/ServiceSearchPage/ServiceSearchPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserProfilePage from './pages/ProfilePage/UserProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/shared/Footer/Footer';
import CommentCreatePage from './pages/CommentCreatePage/CommentCreatePage';
import ServicePage from './pages/ServicePage/ServicePage';
import ServiceCreatePage from './pages/ServiceCreatePage/ServiceCreatePage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<ServiceSearchPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<UserProfilePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='services/service/:id' element={<ServicePage />} />
        <Route path='services' element={<ServiceCreatePage />} />
        <Route path='services/:id/comment' element={<CommentCreatePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
