import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './history';
import Loader from '../components/loader/Loader';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));
const CollectionList = lazy(() => import('../containers/Collections/CollectionList'));
const SearchResults = lazy(() => import('../containers/SearchResults/SearchResults'));

export const Routes = () => {
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
    )
}

