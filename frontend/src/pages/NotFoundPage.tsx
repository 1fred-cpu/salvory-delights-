import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-screen">
            <h1 className="text-3xl font-bold">404 Page Not Found</h1>
            <p className="text-sm ">
                Web page not found <Link to="/" className="text-blue-500">navigate to Home page</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
