export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-5">
        <div>
          <label>Timeout (seconds)</label>
          <input type="number" className="border ml-2 p-1 rounded" />
        </div>
        <div>
          <label>Batch Size</label>
          <input type="number" className="border ml-2 p-1 rounded" />
        </div>
        <div>
          <label>Cooldown</label>
          <input type="number" className="border ml-2 p-1 rounded" />
        </div>
      </div>
    </div>
  );
}