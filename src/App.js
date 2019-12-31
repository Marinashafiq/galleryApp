import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './routes/history';
import Loader from './components/loader/Loader';
import './App.css';
// import { Routes } from './routes/index';
const Home = lazy(() => import('./containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('./containers/Collections/CollectionsPhotos'));
const SearchResults = lazy(() => import('./containers/SearchResults/SearchResults'));
function App() {
  return (
    <Router history={history}>
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Home path="/" exact />
            <SearchResults path="/search/:keyword" exact />
            <SearchResults path="/photos" exact />
            <SearchResults path="/collections" exact />
            <CollectionsPhotos path="/collections/:id" exact />
            {/* <CollectionList path="/collections/:keyword" exact /> */}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
