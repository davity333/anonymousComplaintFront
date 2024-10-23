import React from "react";

function TitleForm(props) {
    return(
        <label className="text-white text-[4.6vh] font-semibold">
            {props.title}
        </label>
    )
}

export default TitleForm;