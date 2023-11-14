import PopUp from 'reactjs-popup';
import { bool, func } from 'prop-types';

import './errorPopUp.css';

function ErrorPopUp({ open, onClose }) {
  return (
    <PopUp open={open} onClose={onClose}>
      <div className='modal'>
        <img src='src/assets/x.jpg' className='x' />
        <h4>Lo sentimos</h4>
        <p className='p-pop-up'>Ha habido algún error en los datos</p>
        <button className='close' onClick={onClose}>
          Click
        </button>
      </div>
    </PopUp>
  );
}

ErrorPopUp.propTypes = {
  open: bool,
  onClose: func,
};

export default ErrorPopUp;
