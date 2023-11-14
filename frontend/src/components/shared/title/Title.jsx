import { string } from 'prop-types';

function Title({ text }) {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
}

Title.propTypes = {
  text: string,
};

export default Title;
