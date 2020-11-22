import PropTypes from 'prop-types';

export default function Thead({ value }) {
  return (
    <th className='px-6 py-3 border-b border-gray-50 bg-indigo-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
      {value}
    </th>
  );
}

Thead.propTypes = {
  value: PropTypes.string.isRequired,
};
