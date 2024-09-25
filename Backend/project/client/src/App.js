import { Suspense, createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { authenticationService } from "./services/auth.service"

import Navbar from './components/navbar/Navbar';

// Create a context to manage authentication
export const AuthContext = createContext();

// Create a provider to manage the authentication state
const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('AuthenticationToken'));
  const navigate = useNavigate()

  const login = (token) => {
    // In a real scenario, you would perform actual authentication here
    setIsLoggedIn(token);
    localStorage.setItem('AuthenticationToken', token);
    navigate('/home')
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('AuthenticationToken', 'false');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the authentication context
const useAuth = () => {
  return useContext(AuthContext);
};

console.log("authenticationService", authenticationService.currentUserValue);
function App() {
  return (
    <Suspense fallback={() => <div>Loading....</div>} >
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<AuthRoute />} >
              <Route path='/' element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PrivateRoute />} >
              <Route path="/add-to-cart" element={<div>add-to-cart</div>} />
              <Route path="/orders" element={<div>My orders</div>} />
              <Route path="/" element={<div>add-to-cart</div>} />
              <Route path="/add-to-cart" element={<div>add-to-cart</div>} />
              <Route path="/add-to-cart" element={<div>add-to-cart</div>} />
            </Route>
            <Route element={<AdminRoutes />} >
              <Route path="/add-product" element={<div>Add Product</div>} />
              <Route path="/all-products" element={<div>All Product</div>} />
              <Route path="/orders" element={<div>Orders</div>} />
              <Route path="/add-offer" element={<div>Offers</div>} />
              <Route path="/all-offers" element={<div>All offers</div>} />
            </Route>


            {/* Public Routes */}

            <Route path="/Home" element={<div>home</div>} />
            <Route path="*" element={<div>Not found</div>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

// A custom wrapper for private routes
const PrivateRoute = ({ element: Element, ...rest }) => {

  const { isLoggedIn } = useAuth();

  if (!authenticationService.currentUserValue?.token) {
    return <Navigate to="/home" />;
  }

  return <Outlet />
};
const AuthRoute = ({ element: Element, ...rest }) => {

  const { isLoggedIn } = useAuth();

  if (authenticationService.currentUserValue?.token) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

const AdminRoutes = ({ }) => {

  if (authenticationService.currentUserValue?.token && authenticationService.currentUserValue?.role == "admin") {
    return <Outlet />
  }
  return <Navigate to="not-found" />


}

export default App;
