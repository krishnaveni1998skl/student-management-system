import { FaFilePdf, FaFileExcel, FaFileCsv } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportButtons({ students, attendance }) {
  // PDF Export
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Student Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Student ID", "Name", "Department", "Year", "Status"]],
      body: students.map((student) => [
        student.studentId,
        student.name,
        student.department,
        student.year,
        student.status,
      ]),
    });

    doc.save("Student_Report.pdf");
  };

  // Excel Export
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "Student_Report.xlsx");
  };

  // CSV Export
  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "Student_Report.csv");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-5">Export Reports</h2>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={exportPDF}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaFilePdf />
          Export PDF
        </button>

        <button
          onClick={exportExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaFileExcel />
          Export Excel
        </button>

        <button
          onClick={exportCSV}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaFileCsv />
          Export CSV
        </button>
      </div>
    </div>
  );
}

export default ExportButtons;
