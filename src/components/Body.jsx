import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import HomePage from "./HomePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import PropertyDetailsPage from "./PropertyDetailsPage/Body.jsx";
import AddPropertyPage from "./AddPropertyPage/Body.jsx";
import EditPropertyPage from "./EditPropertyPage/Body.jsx";

const Body = () => {
    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/propertydetailspage" element={<PropertyDetailsPage />} />
        <Route path="/addpropertypage" element={<AddPropertyPage />} />
        <Route path="/editpropertypage" element={<EditPropertyPage />} />
            </Routes>
        </Router>
    );
};

export default Body;