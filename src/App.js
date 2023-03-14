import React, { Suspense, useContext } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/UI/Button/LoadingSpinner';

import AuthContext from './store/auth-context';

import './App.css';
//import UserLogin from './components/pages/UserLogin';
//import TableData from './components/pages/TableData';
//import AddYourStory from './components/pages/AddYourStory';


const AddYourStory = React.lazy(() => import('./components/pages/AddYourStory'));
const Home = React.lazy(() => import('./components/Home/Home'));
const Login = React.lazy(() => import('./components/Login/Login'));
const TableData = React.lazy(() => import('./components/pages/TableData'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));


function App() {
const ctx = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
      <Routes>

        {!ctx.isLoggedIn && <Route path='/' element={<Login />}>
        </Route>}

        {ctx.isLoggedIn && <Route path="/" element={<Navigate replace to="/home" />} >
        </Route>}

        {ctx.isLoggedIn && <Route path='/home' element={<Home />}>
        </Route>}

        {ctx.isLoggedIn && <Route path='/addStory' element={<AddYourStory />}>
        </Route>}

        {ctx.isLoggedIn && <Route path='/rowDetails' element={<TableData />}>
        </Route>}

        <Route path='*' element={<NotFound />}>
        </Route>

      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
