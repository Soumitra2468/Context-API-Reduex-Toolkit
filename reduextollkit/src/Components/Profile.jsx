import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2 className="text-center text-red-500 font-semibold mt-6">Please login</h2>;
  }

  return (
    <div className="p-4 border rounded max-w-sm mx-auto mt-4">
      <h2 className="text-lg font-semibold mb-2">Profile</h2>
      <p className="text-gray-700">Welcome <span className="font-medium">{user.username}</span></p>
    </div>
  );
}

export default Profile;
