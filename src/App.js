import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import ClientRegister from './components/frontend/auth/ClientRegister';
import Position from './components/admin/position/Position';
import Skill from './components/admin/skill/Skill';
import Source from './components/admin/source/Source';
import EmployeeRegister from './components/frontend/auth/EmployeeRegister';
import ProfileUpdate from './components/frontend/profile/ProfileUpdate';
import CertificateUpdate from './components/frontend/profile/CertificateUpdate';
import EmployeeRegisterWelcome from './components/frontend/profile/EmployeeRegisterWelcome';
import EmployeeList from './components/admin/employee/EmployeeList';
import ClientList from './components/admin/client/ClientList';
import EmployeeDetails from './components/admin/employee/EmployeeDetails';
import ClientDetails from './components/admin/client/ClientDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/client-register' element={<ClientRegister />} />
          <Route path='/employee-register' element={<EmployeeRegister />} />
          <Route path='/employee-profile-update/:id' element={<ProfileUpdate />} />
          <Route path='/employee-certificate-update/:id' element={<CertificateUpdate />} />
          <Route path='/employee-welcome' element={<EmployeeRegisterWelcome />} />

          {/* admin routes here */}
          <Route path="/admin" element={<MasterLayout />} >

            <Route index path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path='position' element={<PrivateRoute><Position /></PrivateRoute>} />
            <Route path='skill' element={<PrivateRoute><Skill /></PrivateRoute>} />
            <Route path='source' element={<PrivateRoute><Source /></PrivateRoute>} />
            <Route path='employee-list' element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path='employee-details/:id' element={<PrivateRoute><EmployeeDetails /></PrivateRoute>} />
            <Route path='client-list' element={<PrivateRoute><ClientList /></PrivateRoute>} />
            <Route path='client-details/:id' element={<PrivateRoute><ClientDetails /></PrivateRoute>} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;