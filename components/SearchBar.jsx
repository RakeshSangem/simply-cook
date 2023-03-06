import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => onSubmit(e, value)}
      className="w-full md:max-w-lg mx-auto m-4"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search over 100,000 recipes..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-md px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
