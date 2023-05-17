const store = require('./app/store');

const clothActions = require('./App/Features/Clothes/clothSlice').clothActions;

console.log("initialState",store.getState());

const subscribeToShop = store.subscribe(()=>{
   
})

store.dispatch(clothActions.ordered(100));
store.dispatch(clothActions.restocked(50));

subscribeToShop();