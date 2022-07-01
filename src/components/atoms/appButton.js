const { Link } = require("react-router-dom");

const AppDownloadButton = () => {
  return (
    <Link to="/">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-[#004D00] text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#004D00]/[.33] to-[#01301E]/[.33] hover:bg-green-900 focus:outline-none"
      >
        App
      </button>
    </Link>
  );
};

export default AppDownloadButton;
