import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProgressToolbar from "../../components/progress/ProgressToolbar";
import ProgressTable from "../../components/progress/ProgressTable";
import { getProgress, deleteProgress } from "../../services/api";

function Progress() {
  const [progress, setProgress] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await getProgress();
      setProgress(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProgress = progress.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchTerm.toLowerCase()),
  );
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this progress record?",
  );

  if (!confirmDelete) return;

  try {
    await deleteProgress(id);
    loadProgress();
  } catch (error) {
    console.error(error);
  }
};
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Progress Management
          </h1>

          <p className="text-gray-500 mt-2">Manage student progress records.</p>
        </div>

        <ProgressToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProgressTable progress={filteredProgress} onDelete={handleDelete} />
      </div>
    </MainLayout>
  );
}

export default Progress;
