import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200">

        <div className="relative">

          {/* Search Icon */}

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          {/* Input */}

          <input
            type="text"
            placeholder="Search jobs, companies, skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-14 py-5 rounded-2xl outline-none text-lg"
          />

          {/* Clear Button */}

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
            >
              <FaTimes />
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default SearchBar;