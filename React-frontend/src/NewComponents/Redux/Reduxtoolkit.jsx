import { createSlice, configureStore } from "@reduxjs/toolkit";

const ProductSlice = new createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    setproducts(state, action) {
      return { ...state, products: action.payload };
    },
  },
});
const shippingSlice = new createSlice({
  name: "Shipping",
  initialState: { address: "", city: "", postalcode: "", country: "" },
  reducers: {
    setshippingaddress(state, action) {
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.postalCode = action.payload.postalCode;
      state.country = action.payload.country;
    },
    deleteshipping(state, action) {
      return { ...state, address: "", city: "", postalcode: "", country: "" };
    },
  },
});

const CartSlice = new createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setcart(state, action) {
      state.push(action.payload);
    },
    test1(state, action) {
      console.log("index", state.indexOf(action.payload));
    },
    clearCart(state, action) {
      return [];
    },
  },
});

const UsersSlice = new createSlice({
  name: "Users",
  initialState: { users: [] },
  reducers: {
    SetUsers(state, action) {
      return { ...state, users: action.payload };
    },
    deleteUsers(state, action) {
      state.users = state.users.filter((f) => f.id != action.payload);
    },
    clear(state, action) {
      state.users = [];
    },
  },
});

const userSlice = new createSlice({
  name: "user",
  initialState: { id: "", name: "", email: "", password: "", isAdmin: false },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAdmin = action.payload.isAdmin;
    },
    deleteUser(state, action) {
      return {
        ...state,
        id: "",
        name: "",
        password: "",
        email: "",
        isAdmin: "",
      };
    },
  },
});

const store = new configureStore({
  reducer: {
    product: ProductSlice.reducer,
    user: userSlice.reducer,
    cart: CartSlice.reducer,
    shipping: shippingSlice.reducer,
    users: UsersSlice.reducer,
  },
});

export { store };
export const { setproducts, seProd } = ProductSlice.actions;
export const { SetUsers, deleteUsers, clear } = UsersSlice.actions;

export const { setUser, deleteUser } = userSlice.actions;
export const { setcart, test1, clearCart } = CartSlice.actions;
export const { setshippingaddress, deleteshipping } = shippingSlice.actions;
