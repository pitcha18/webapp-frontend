"use client";
import { useEffect, useState } from "react";
import { fetchLogs } from "../api/route";

export default function LogsPage() {
  const [allLogs, setAllLogs] = useState([]);
  const [paginatedLogs, setPaginatedLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(10);

  useEffect(() => {
    let mounted = true;

    async function loadLogs() {
      try {
        if (mounted) setLoading(true);
        const data = await fetchLogs();
        const arr = Array.isArray(data) ? data : data.data || [];
        arr.sort((a, b) => new Date(b.created) - new Date(a.created));
        if (mounted) {
          setAllLogs(arr);
        }
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load logs");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadLogs();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    setPaginatedLogs(allLogs.slice(indexOfFirstLog, indexOfLastLog));
  }, [allLogs, currentPage, logsPerPage]);

  const totalPages = Math.ceil(allLogs.length / logsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <p className="text-pink-700">Loading logs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <p className="font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-pink-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="bg-white p-6 rounded-3xl border border-pink-200 shadow-sm w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
          Logs
        </h1>

        <div className="overflow-x-auto border border-pink-200 rounded-lg">
          <table className="w-full border-collapse min-w-[600px]">
            <thead className="bg-pink-50">
              <tr>
                <th className="border-b border-pink-200 p-3 text-left text-sm font-semibold text-pink-700">
                  Created
                </th>
                <th className="border-b border-pink-200 p-3 text-left text-sm font-semibold text-pink-700">
                  Country
                </th>
                <th className="border-b border-pink-200 p-3 text-left text-sm font-semibold text-pink-700">
                  Drone ID
                </th>
                <th className="border-b border-pink-200 p-3 text-left text-sm font-semibold text-pink-700">
                  Drone Name
                </th>
                <th className="border-b border-pink-200 p-3 text-left text-sm font-semibold text-pink-700">
                  Celsius
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-100">
              {paginatedLogs.map((r, i) => (
                <tr key={i} className="even:bg-white odd:bg-pink-50">
                  <td className="p-3 text-sm text-pink-700 whitespace-nowrap">
                    {new Date(r.created).toLocaleString()}
                  </td>
                  <td className="p-3 text-sm text-pink-700">{r.country}</td>
                  <td className="p-3 text-sm text-pink-700">{r.drone_id}</td>
                  <td className="p-3 text-sm text-pink-700">{r.drone_name}</td>
                  <td className="p-3 text-sm text-pink-700">{r.celsius}</td>
                </tr>
              ))}

              {allLogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-pink-500">
                    No logs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {allLogs.length > logsPerPage && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm 
                       text-sm font-medium text-white bg-pink-500 
                       hover:bg-pink-400 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                       disabled:bg-pink-200 disabled:cursor-not-allowed
                       transition duration-150 ease-in-out"
            >
              Previous
            </button>
            <span className="text-sm text-pink-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm 
                       text-sm font-medium text-white bg-pink-500 
                       hover:bg-pink-400 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                       disabled:bg-pink-200 disabled:cursor-not-allowed
                       transition duration-150 ease-in-out"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
