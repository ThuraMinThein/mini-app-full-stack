import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.css'
import AuthRouter from './routers/auth.router.jsx';
import UserRouter from './routers/user.router.jsx';

function App() {

  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={AuthRouting} />
      </Routes>
      <Routes>
        <Route path="/*" element={UserRouting} />
      </Routes>
    </>
  )
}

export default App
