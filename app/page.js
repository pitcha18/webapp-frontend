"use client";

const CogIcon = () => (
  <svg
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774a1.125 1.125 0 0 1 .12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.142.854.108 1.204l.527.738a1.125 1.125 0 0 1-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.45.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.893c-.09.543-.56.94-1.11.94h-1.093c-.55 0-1.02-.397-1.11-.94l-.149-.893c-.07-.425-.383-.765-.78-.93-.398-.165-.854-.142-1.204.108l-.738.527a1.125 1.125 0 0 1-1.45-.12l-.773-.773a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.505.71-.93.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398-1.02.94-1.11l.894-.149c.424-.07.764-.383.93-.78.165-.398.142.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.204.108.397-.165.71.505.78-.93l.15-.893zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    />
  </svg>
);

const CloudArrowUpIcon = () => (
  <svg
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.33-2.13 3 3 0 0 1 .11-5.875M18.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.33-2.13 3 3 0 0 1 .11-5.875"
    />
  </svg>
);

const DocumentTextIcon = () => (
  <svg
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
    />
  </svg>
);

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-pink-50 font-sans text-pink-900 transition-colors duration-300">
      <main className="flex w-full max-w-5xl flex-col items-center px-6 py-16 md:px-10">
        <div className="text-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-pink-700">
            ✨ Drone Prae Website ✨
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-pink-600">
            Manage your drone — configure, upload logs, and review history in
            style!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/config"
              className="rounded-full bg-pink-500 px-6 py-3 text-white font-medium shadow-md hover:bg-pink-400 hover:shadow-lg transition"
            >
              💖 View Configuration
            </a>
            <a
              href="/logs"
              className="rounded-full border border-pink-300 px-6 py-3 font-medium text-pink-700 bg-white hover:bg-pink-100 transition"
            >
              📝 Review Logs
            </a>
          </div>
        </div>

        <div className="py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center bg-white rounded-3xl border border-pink-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-100 text-pink-600 mx-auto">
                <CogIcon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-pink-700">
                Manage Configuration
              </h3>
              <p className="mt-2 text-base text-pink-600">
                Adjust your drone’s settings — ID, name
              </p>
              <a
                href="/config"
                className="mt-4 inline-block font-medium text-pink-500 hover:text-pink-400"
              >
                Go to Config →
              </a>
            </div>

            <div className="p-6 text-center bg-white rounded-3xl border border-pink-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-100 text-pink-600 mx-auto">
                <CloudArrowUpIcon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-pink-700">
                Submit Data
              </h3>
              <p className="mt-2 text-base text-pink-600">
                Upload drone data, like temperature logs, right from the field
                💨
              </p>
              <a
                href="/submit"
                className="mt-4 inline-block font-medium text-pink-500 hover:text-pink-400"
              >
                Submit Log →
              </a>
            </div>

            <div className="p-6 text-center bg-white rounded-3xl border border-pink-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-100 text-pink-600 mx-auto">
                <DocumentTextIcon />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-pink-700">
                Review History
              </h3>
              <p className="mt-2 text-base text-pink-600">
                Peek through your drone’s full, cute log history 📜
              </p>
              <a
                href="/logs"
                className="mt-4 inline-block font-medium text-pink-500 hover:text-pink-400"
              >
                View All Logs →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
