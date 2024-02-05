import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Loading from '../pages/Loading/Landing';
import Dashboard from '../pages/Dashboard/Dashboard';
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Payment = lazy(() => import('../pages/Payment/Payment'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const AllUsers = lazy(() => import('../pages/Dashboard/AllUsers'));
const AllProducts = lazy(() => import('../pages/Dashboard/AllProducts'));
const AddProduct = lazy(() => import('../pages/Dashboard/AddProduct'));

const Layout = lazy(() => import('../layout/Layout'));

function Routers() {
  return (
    <div>
      <Suspense fallback={<Loading />} >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path='/dashboard' element={<DashboardLayout />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/users' element={<AllUsers />} />
            <Route path='/dashboard/products' element={<AllProducts />} />
            <Route path='/dashboard/addproduct' element={<AddProduct />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;
