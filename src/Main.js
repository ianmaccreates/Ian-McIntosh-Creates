import './Main.css';
import Sidebar from './SideBar/SideBar';
import App from './App';

function Main() {
  return (
    <div className="main-layout">
      <Sidebar />
      <App />
    </div>
  );
}

export default Main;
