import { createDrive } from "../actions/driveActions";
import { createReducer } from "@reduxjs/toolkit";
import { addDrive,removeDrive } from "../actions/driveActions";

const initState={
    drives:[
        {
            companyName:"key value",briefInfo:"a product based company",slot:"c2",requirements:"no backlogs",
        post:"software engg",location:"kochi",lastDate:"18/08/22"
        },

        {
            companyName:"fdl",briefInfo:"a start up company",slot:"b2",requirements:"not more 3 backlogs",
            post:"software engg",location:"trivandrum",lastDate:"11/08/22"
        },
    ]
}

const driveReducer=createReducer(initState,(builder)=>{
    builder.addCase(addDrive,(state,action)=>{
         state.drives.push(action.payload)
    }).addCase(removeDrive,(state,action)=>{
        state.drives=state.drives.filter(drive=>drive.id!==action.payload.id)
    });
})

export default driveReducer;