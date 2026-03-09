import { Route, Routes, useRoutes } from 'react-router-dom';
import AuthRouter from './routers/auth.router.jsx';
import UserRouter from './routers/user.router.jsx';

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
      <Routes>
        <Route path="/*" element={(<h1>404</h1>)} />
      </Routes>
    </>
  )
}

export default App
