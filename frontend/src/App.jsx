import { Route, Routes, useRoutes } from 'react-router-dom';
import AuthRouter from './routers/auth.router.jsx';
import UserRouter from './routers/user.router.jsx';
import { ToastContainer } from 'react-toastify';

function App() {

  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  return (
    <>
      <Routes>
        <Route path="/*" element={AuthRouting} />
      </Routes>
      <Routes>
        <Route path="/*" element={UserRouting} />
      </Routes>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default App
