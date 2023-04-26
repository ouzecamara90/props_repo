import React from "react";
import propTypes from "prop-types";

const profile = ({fullName, bio, profession, handleName, children}) => {
    return (
            <div style = {{border: "1px solid black", padding : "10px"}}>
                {children}
                    <h2>{fullName}</h2>
                        <p>{bio}</p>
                        <p>{profession}</p>
                        <button onClick={() => handleName(fullName)}>Click me</button>
            </div>
    );
};

profileDefaultprops = {
    fullName : "Unknown",
    bio : "No bio availlable",
    profession : "Unknown profession",
    handleName : () => {},
};

profile.propTypes = {
    fullName : propTypes.string.isRequired,
    bio : propTypes.string.isRequired,
    profession : propTypes.string.isRequired,
    handleName : propTypes.func.isRequired,


};

export default profile;
