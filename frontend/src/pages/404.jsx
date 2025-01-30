import React from "react";

const NotFound = () => {
    document.title = "Error : 404 - Page Doesn't Exist | URL Not Found";
    return (
        <div className="full-container">
            <img
                style={{
                    width: "90%",
                    height: "auto",
                    objectFit: "contain"
                }}
                src="./icons/404.png"
                alt="Not Found"
            />
            <div
                style={{
                    margin: "1rem 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img
                    style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "contain"
                    }}
                    src="./icons/error.png"
                    alt="Error"
                />
                <h1
                    style={{
                        color: "#ff0000",
                        margin: "0 1rem"
                    }}
                >
                   Error : Page Not Found
                </h1>
            </div>
        </div>
    );
};

export default NotFound;
