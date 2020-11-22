import PropTypes from 'prop-types';

export default function Card({ title, number }) {
  return (
    <div className='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
      <div className='mx-5'>
        <h4 className='text-2xl font-semibold text-gray-700'>{number}</h4>
        <div className='text-gray-500'>{title}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
