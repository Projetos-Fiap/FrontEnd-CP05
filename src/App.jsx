import {} from 'react';
import NavExample from './components/Nav';
import { Outlet } from 'react-router-dom';
import './css/app.css';
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <>
          <NavExample />
          <Outlet/>
      </>
    </AuthProvider>
  );
}

export default App;
