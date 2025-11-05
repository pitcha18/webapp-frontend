"use client";
import { useEffect, useState } from "react";
import { fetchConfig } from "../api/route";

export default function Config() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadConfig() {
      try {
        if (mounted) setLoading(true);
        const data = await fetchConfig();
        if (mounted) setConfig(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadConfig();
    return () => {
      mounted = false;
    };
  }, []);

  // Use theme-consistent colors for loading/error states
  if (loading) {
    return <p className="p-8 text-pink-700">Loading config...</p>;
  }
  if (error) {
    // Red is acceptable for errors, but we can style the container
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-pink-50 p-4">
        <p className="p-8 font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }
  if (!config) {
    return <p className="p-8 text-pink-700">No config found</p>;
  }

  const { drone_id, drone_name, light, country } = config;

  return (
    // Main container matching the pink theme
    <div className="min-h-screen bg-pink-50 font-sans text-pink-900 flex items-center justify-center p-4 transition-colors duration-300">
      {/* Card styling from the theme */}
      <div className="bg-white p-6 rounded-3xl border border-pink-200 shadow-sm w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
          Drone Config
        </h1>
        {/* Themed table container */}
        <div className="border border-pink-200 rounded-lg overflow-hidden">
          <table className="border-collapse w-full">
            <tbody>
              {/* Themed table row */}
              <tr className="border-b border-pink-100">
                <td className="p-3 font-semibold bg-pink-50 w-1/3 text-pink-800">
                  Drone ID
                </td>
                <td className="p-3 text-pink-700">{drone_id}</td>
              </tr>
              {/* Themed table row */}
              <tr className="border-b border-pink-100">
                <td className="p-3 font-semibold bg-pink-50 text-pink-800">
                  Drone Name
                </td>
                <td className="p-3 text-pink-700">{drone_name}</td>
              </tr>
              {/* Themed table row */}
              <tr className="border-b border-pink-100">
                <td className="p-3 font-semibold bg-pink-50 text-pink-800">
                  Light
                </td>
                <td className="p-3 text-pink-700">{light}</td>
              </tr>
              {/* Themed table row (last) */}
              <tr>
                <td className="p-3 font-semibold bg-pink-50 text-pink-800">
                  Country
                </td>
                <td className="p-3 text-pink-700">{country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
