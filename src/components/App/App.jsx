import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import UserHomePage from "../UserHomePage/UserHomePage";
import RegistrationLanding from "../RegistrationLanding/RegistrationLanding";
import StaticListPage from '../StaticListPage/StaticListPage'
import ListPage from "../ListPage/ListPage";
import RegisterPageProvider from "../RegisterPageProvider/RegisterPageProvider";
import RegisterPageNewFamily from "../RegisterPageNewFamily/RegisterPageNewFamily";
import RegisterPageJoinFamily from "../RegisterPageJoinFamily/RegisterPageJoinFamily";
import BottomNav from "../BottomNav/BottomNav";

import "./App.css";
import AdminHomePage from "../AdminHomePage/AdminHomePage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
		<Router>
			<div>
				<Nav />
				<Switch>
					{/* Visiting localhost:3000 will redirect to localhost:3000/home */}
					<Redirect exact from="/" to="/home" />

					{/* Visiting localhost:3000/about will show the about page. */}
					<Route
						// shows AboutPage at all times (logged in or not)
						exact
						path="/about"
					>
						<AboutPage />
					</Route>

					{/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
					<ProtectedRoute
						// logged in shows UserPage else shows LoginPage
						exact
						path="/user"
					>
						<UserHomePage />
						<BottomNav />
					</ProtectedRoute>

					<ProtectedRoute
						// logged in shows InfoPage else shows LoginPage
						exact
						path="/info"
					>
						<InfoPage />
					</ProtectedRoute>

					<Route exact path="/login">
						{user.id ? (
							// If the user is already logged in,
							// redirect to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the login page
							<LoginPage />
						)}
					</Route>

					<Route exact path="/registration">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the registration page
							<RegistrationLanding />
						)}
					</Route>

					<Route exact path="/registration_newprovider">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the registration page
							<RegisterPageProvider />
						)}
					</Route>

					<Route exact path="/registration_newfamily">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the registration page
							<RegisterPageNewFamily />
						)}
					</Route>

					<Route exact path="/registration_joinfamily">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the registration page
							<RegisterPageJoinFamily />
						)}
					</Route>

					<Route exact path="/home">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /user page
							<Redirect to="/user" />
						) : (
							// Otherwise, show the Landing page
							<LandingPage />
						)}
					</Route>

					<Route exact path="/static_list">
						<StaticListPage />
						<BottomNav />
					</Route>

					<ProtectedRoute
						// logged in shows admin page else shows LoginPage
						exact
						path="/admin"
					>
						<AdminHomePage />
					</ProtectedRoute>

					<Route exact path="/provider_list">
						<ListPage />
						<BottomNav />
					</Route>

					{/* If none of the other routes matched, we will show a 404. */}
					<Route>
						<h1>404</h1>
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
  );
}

export default App;
