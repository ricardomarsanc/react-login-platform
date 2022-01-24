import React, { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { selectUser } from "./redux/selectors/user.selector";
import { auth, onAuthStateChanged } from "./firebaseConfig";
import { login, logout } from "./redux/reducers/user";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const redirect = () => {
    return !user ? (
      <Navigate to={{ pathname: "/login/" }} />
    ) : (
      <Navigate to='/dashboard' />
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            id: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login/' element={<Login />} />
          <Route path='/register/' element={<Register />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute component={() => <Dashboard tab='home' />} />
            }
          />
          <Route
            path='/dashboard/settings'
            element={
              <PrivateRoute component={() => <Dashboard tab='settings' />} />
            }
          />
          <Route path='/*' element={redirect()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: RouteComponent,
}) => {
  let location = useLocation();
  const user = useSelector(selectUser);

  if (user === null) {
    return <Navigate to={{ pathname: "/login/" }} state={{ from: location }} />;
  } else {
    return <RouteComponent />;
  }
};

export default App;
