import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadExcel = async () => {
    if (!file) return alert("Select Excel file first");

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await axios.post("/api/process", form, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          setProgress(Math.round((e.loaded * 100) / e.total));
        },
      });

      setLogs((prev) => [...prev, "✔ Scan Completed"]);
      alert("Done");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <input type="file" className="mb-4" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={uploadExcel} className="bg-blue-600 text-white px-5 py-2 rounded">
          🚀 Start Scan
        </button>

        <div className="mt-4 w-full bg-gray-200 h-3 rounded">
          <div style={{ width: progress + "%" }} className="h-full bg-blue-600 rounded"></div>
        </div>

        <textarea
          className="w-full h-40 mt-4 p-2 border rounded"
          value={logs.join("\n")}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}