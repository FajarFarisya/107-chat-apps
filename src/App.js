import "./index.css";

import 'simplebar';
import 'simplebar/dist/simplebar.css';
import Sidebar from "./components/Sidebar";
import ListChat from "./components/ListChat";
import DetailChat from "./components/DetailChat";

const App = () => {
  return (
    <div className="w-full h-auto min-h-screen lg:flex">
      <Sidebar></Sidebar>
      <ListChat></ListChat>
      <DetailChat></DetailChat>
    </div>
  );
};

export default App;
