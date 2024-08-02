import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import CardApp from './components/rewards/reward_card';
import CamPage from './components/cam_page/cam';
import SideNav from './components/side_nav_bar/sidenav';
import UserProfile from './components/profile_page/userprofile';
import SinglePost from './components/homepage/singlepost';
import Profile from './components/profile_page/profiledata';
import FilterSidebar from './components/myntra_page/FilterSidebar';
import Leaderboard from './components/leaderborad/leaderboard';
import MyntraPage from './components/myntra_page/home';
import MainPage from './components/myntra_page/MainPage';
import TopCollections from './components/collection_page/topwar';
import CollectionDetail from './components/collection_page/CollectionDetail';
import ResponsiveAppBar from './components/top_nav_bar/navbar_ui';
import FetchPosts from './components/homepage/fetch';
import MainLayout from './components/side_nav_bar/responsivenav'; 

const App = () => {
  const location = useLocation();
  const noLayoutPaths = ['/', '/filters', '/shop'];
  const shouldUseMainLayout = !noLayoutPaths.includes(location.pathname);

  return (
    <>
      <div>
        <ResponsiveAppBar />
        {shouldUseMainLayout ? (
          <MainLayout>
            <Routes>
              <Route path="/style-buddies" element={<><FetchPosts /><SideNav/></>} />
              <Route path="/rewards" element={<CardApp />} />
              <Route path="/camera" element={<CamPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/nav" element={<FetchPosts />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/user/:userId" element={<Profile />} />
              <Route path="/collections" element={<TopCollections />} />
              <Route path="/collection/:id" element={<CollectionDetail />} />
            </Routes>
          </MainLayout>
        ) : (
          <Routes>
            <Route path="/" element={<MyntraPage />} />
            <Route path="/filters" element={<FilterSidebar />} />
            <Route path="/shop" element={<MainPage />} />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
