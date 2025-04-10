import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">School Management System</h1>
      <Link to="/students" className="text-blue-600 underline">
        View Students
      </Link>
    </div>
  );
}

export default App;
