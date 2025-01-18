export const SearchBar = () => {
  return (
    <div className="bg-white p-4 shadow-sm flex items-center space-x-3 rounded-lg">
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full flex-1">
        <input
          type="text"
          placeholder="Search for 'Christmas Special'"
          className="bg-transparent flex-1 text-sm text-gray-600 focus:outline-none ml-2"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.6-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        <div className="h-7 w-px bg-gray-400 mx-4"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="bg-orange-500"
        >
          <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
        </svg>
      </div>
    </div>
  );
};
