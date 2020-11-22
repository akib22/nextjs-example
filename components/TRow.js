import Link from 'next/link';
import PropTypes from 'prop-types';

export default function TRow({ user }) {
  let statusClass = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
  statusClass += user.isActive ? ' bg-green-100 text-green-800' : ' bg-red-100 text-red-800';

  return (
    <tr className='bg-white'>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
              alt='avatar'
            />
          </div>

          <div className='ml-4'>
            <div className='text-sm leading-5 font-medium text-gray-900'>
              {user.name}
            </div>
            <div className='text-sm leading-5 text-gray-500'>
              {`${user.name.split(' ')[1].toLowerCase()}@example.com`}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='text-sm leading-5 text-gray-900'>
          Software Engineer
        </div>
        <div className='text-sm leading-5 text-gray-500'>
          Web dev
        </div>
      </td>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <span className={statusClass}>
          {user.isActive ? 'active' : 'inactive'}
        </span>
      </td>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{user.lastLoginTime}</td>
      <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
        <Link
          className='text-indigo-600 hover:text-indigo-900'
          href={`/users/${user.id}`}
        >
          View Profile
        </Link>
      </td>
    </tr>
  );
}

TRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    lastLoginTime: PropTypes.string.isRequired,
  }),
};
