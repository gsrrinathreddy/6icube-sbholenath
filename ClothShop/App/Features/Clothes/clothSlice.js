const createSlice = require('@reduxjs/toolkit').createSlice;

initialState = {
    noOfcloths : 250
}

const clothSlice = createSlice({
    name:'cloth',
    initialState,
    reducers:{
        ordered:(state = initalState,action) => {
            state.noOfcloths -= action.payload; 
            
        },
        restocked:(state = initalState,action) => {
            state.noOfcloths += action.payload; 
            
        },
    },

});

module.exports = clothSlice.reducer;
module.exports.clothActions = clothSlice.actions;