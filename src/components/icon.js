import React from "react";
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa" // refeer react-icon docs for these

const Icons = ({name})=>{   // here {name} is equivalent to props.name
    switch (name){
        case "circle":
            return <FaRegCircle className="icons"></FaRegCircle>
        case "cross":
            return <FaTimes className="icons"></FaTimes>
        default :
            return <FaPen className="icons"></FaPen>
    }
};

export default Icons;