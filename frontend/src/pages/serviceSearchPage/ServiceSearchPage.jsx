import useServices from '../../hooks/useServices';
import ErrorPopUp from '../../components/shared/ErrorPopUp/ErrorPopUp';
import SearchForm from '../../components/shared/SearchForm/SearchForm';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Service1 from '../../components/shared/Service/Service1';
import Spinner from '../../components/shared/Spinner/Spinner';
import { Link } from 'react-router-dom';
import './serviceSearchPage.css';

const ServiceSearchPage = () => {
  const {
    services,
    searchParams,
    setSearchParams,
    errorPopUp,
    setErrorPopUp,
    loading,
  } = useServices();
  const { token } = useAuth();

  return (
    <main className='serviceSearch'>
      <h2 className='h2-ssp'> Lista de servicios</h2>

      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        loading={loading}
      />

      {loading && <Spinner />}
      {errorPopUp && (
        <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      )}

      <ul className='serviceList'>
        {services && services.length > 0 ? (
          services.map((service) => {
            return (
              <Link to={`/services/service/${service.id}`} key={service.id}>
                <Service1 service={service} loading={loading} />
              </Link>
            );
          })
        ) : (
          <p className='p-ssp'>¡No se ha encontrado ningún servicio!</p>
        )}
      </ul>
      {token && (
        <nav>
          <div className='b-añadir'>
            <NavLink to='/services'>Añadir un servicio</NavLink>
          </div>
        </nav>
      )}
    </main>
  );
};
export default ServiceSearchPage;
