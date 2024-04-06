
import logo from '../../../assets/icon.png'; 

const Header = ({ username }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-10" />
        <h1 className="text-white text-xl font-semibold">GrievEase</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        
        
        <div className="relative">
          <input type="text" placeholder="Search..." className="py-1 px-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="absolute inset-y-0 right-0 px-3 bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div> {/* User icon */}
          <span className="text-white">{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
