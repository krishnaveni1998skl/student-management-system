function ProfileCard() {
  const user = {
    name: "Admin",
    email: "admin@gmail.com",
    role: "Administrator",
    phone: "9876543210",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-gray-500">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
