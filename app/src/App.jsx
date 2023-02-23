import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentActivity from './ui/RecentActivity';
import TeamMembers from './ui/TeamMembers';
import Home from './ui/Home';
import NavigationBar from './component/Navbar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <NavigationBar/>
        <div className="container">
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path="/recent" element={<RecentActivity />} />
            <Route path="/team" element={<TeamMembers />} />
          </Routes>
        </div>
      </>
  );
}

export default App;