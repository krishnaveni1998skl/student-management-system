import MainLayout from "../../layouts/MainLayout";
import ProfileCard from "../../components/profile/ProfileCard";
import ChangePassword from "../../components/profile/ChangePassword";

function Profile() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>

          <p className="text-gray-500 mt-2">
            Manage your profile information and password.
          </p>
        </div>

        <ProfileCard />

        <ChangePassword />
      </div>
    </MainLayout>
  );
}

export default Profile;
