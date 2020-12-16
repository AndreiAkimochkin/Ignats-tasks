import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id:number) => { props.deleteAffairCallback(props.affair._id)};

    return (
        <div>
            // show some text

            <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    );
}

export default Affair;
