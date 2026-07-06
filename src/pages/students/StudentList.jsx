import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StudentToolbar from "../../components/students/StudentToolbar";
import StudentTable from "../../components/students/StudentTable";
import Pagination from "../../components/common/Pagination";
import { getStudents } from "../../services/api";

function StudentList() {
  const [students, setStudents] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  // FILTER
  const filteredStudents = students.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchDepartment = department
      ? student.department === department
      : true;

    const matchYear = year ? student.year === year : true;

    const matchStatus = status ? student.status === status : true;

    return matchSearch && matchDepartment && matchYear && matchStatus;
  });
  // SORTING
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (!sortBy) return 0;

    let valueA = a[sortBy];
    let valueB = b[sortBy];

    // String values
    if (typeof valueA === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) {
      return sortOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === "asc" ? 1 : -1;
    }

    return 0;
  });
  // PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
const currentStudents = sortedStudents.slice(indexOfFirstItem, indexOfLastItem);
  // RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, department, year, status, sortBy, sortOrder]);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Student Management
          </h1>
          <p className="text-gray-500 mt-2">Manage all student records.</p>
        </div>

        <StudentToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          department={department}
          setDepartment={setDepartment}
          year={year}
          setYear={setYear}
          status={status}
          setStatus={setStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {/* TABLE */}
        <StudentTable students={currentStudents} />

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        
          totalItems={sortedStudents.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </MainLayout>
  );
}

export default StudentList;
