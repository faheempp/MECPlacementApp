// import { createDrive } from "../actions/driveActions";
// import { createReducer } from "@reduxjs/toolkit";
// import { addDrive,removeDrive } from "../actions/driveActions";

// const initState={
//     drives:[
//         {
//             companyName:"key value",slot:"c2",
//         post:"software engg",id:1
//         },

//         {
//             companyName:"fdl",slot:"b2",
//             post:"software engg",id:2
//         },
//     ]
// }

// const driveReducer=createReducer(initState,(builder)=>{
//     builder.addCase(addDrive,(state,action)=>{
//          state.drives.push(action.payload)
//     }).addCase(removeDrive,(state,action)=>{
//         state.drives=state.drives.filter(drive=>drive.id!==action.payload.id)
//     });
// })

// export default driveReducer;