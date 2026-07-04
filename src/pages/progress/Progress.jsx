import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProgressToolbar from "../../components/progress/ProgressToolbar";
import ProgressTable from "../../components/progress/ProgressTable";
import Pagination from "../../components/common/Pagination";
import { getProgress, deleteProgress } from "../../services/api";

function Progress() {
  const [progress, setProgress] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  // Search Filter
  const filteredProgress = progress.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProgress = filteredProgress.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Reset page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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
      alert("Failed to delete progress.");
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

        <ProgressTable progress={currentProgress} onDelete={handleDelete} />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={filteredProgress.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </MainLayout>
  );
}

export default Progress;
