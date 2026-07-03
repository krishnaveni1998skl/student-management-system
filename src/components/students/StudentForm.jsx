function StudentForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-2">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter Student ID"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Student Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter Student Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
            placeholder="Enter Phone Number"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Gender</label>

          <select className="w-full border rounded-lg p-3">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Date of Birth</label>

          <input type="date" className="w-full border rounded-lg p-3" />
        </div>

        <div>
          <label className="block font-medium mb-2">Department</label>

          <select className="w-full border rounded-lg p-3">
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Mechanical</option>
            <option>Electronics</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Academic Year</label>

          <select className="w-full border rounded-lg p-3">
            <option>I Year</option>
            <option>II Year</option>
            <option>III Year</option>
            <option>IV Year</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Address</label>

          <textarea
            rows="4"
            className="w-full border rounded-lg p-3"
            placeholder="Enter Address"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Status</label>

          <select className="w-full border rounded-lg p-3">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div className="md:col-span-2 flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
