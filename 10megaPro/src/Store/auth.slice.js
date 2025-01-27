import { createSlice } from "@reduxjs/toolkit";

// this is for tracking the user is logged in or not 


// defineing the initial state of the app 
const InitialState = {
    status: false,
    userData: null
}

// Payload: Provides the data needed to modify the state.
// createSlice allows you to generate the reducers 
const AuthSlice = createSlice({
    name: "auth",
    InitialState,
    // reducers are the features of the app 
    reducers: { 
        login: (state , action) => {
            state.status = true;
            state.userData = action.payload.userData // payload helps the reducer to update the current state 
        },

        logout: (state ) => {
         state.status = false;
         state.userData = null;
        }
    } // which we can to change in store 
})


export const {login , logout} =  AuthSlice.actions


export default AuthSlice.reducer

