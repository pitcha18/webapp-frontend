"use client";
import { useEffect, useState } from "react";
import { fetchConfig, postLog } from "../api/route";

export default function SubmitPage() {
  const [config, setConfig] = useState(null);
  const [celsius, setCelsius] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchConfig()
      .then((data) => mounted && setConfig(data))
      .catch((e) => console.error(e));
    return () => (mounted = false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    if (!config) return setStatus("Missing config");
    if (!celsius) return setStatus("Enter celsius");

    const payload = {
      drone_id: config.drone_id,
      drone_name: config.drone_name,
      country: config.country,
      celsius: Number(celsius),
    };

    try {
      setLoading(true);
      await postLog(payload);
      setStatus("Submitted successfully");
      setCelsius("");
    } catch (err) {
      console.error(err);
      setStatus("Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  const statusColor = status?.startsWith("Submitted")
    ? "text-green-600" // Success
    : "text-red-600"; // Error

  return (
    // Styled to match the pink theme
    <div className="min-h-screen bg-pink-50 font-sans text-pink-900 flex items-center justify-center p-4 transition-colors duration-300">
      {/* Card styling from the theme */}
      <div className="bg-white p-6 rounded-3xl border border-pink-200 shadow-sm w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
          Submit Temperature Log
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="block text-sm font-medium text-pink-800">
            Temperature (°C)
            <input
              type="number"
              step="0.1"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              // Themed input field
              className="mt-1 block w-full rounded-md border-pink-300 shadow-sm p-2
                         focus:border-pink-500 focus:ring-pink-500"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            // Themed button
            className="py-2 px-3 border border-transparent rounded-md shadow-sm 
                       text-sm font-medium text-white bg-pink-500 
                       hover:bg-pink-400 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                       disabled:bg-pink-200 disabled:cursor-not-allowed
                       transition duration-150 ease-in-out"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p className={`mt-4 font-medium text-center ${statusColor}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
