import { configureStore } from "@reduxjs/toolkit";
import reducer from ".";

const store = configureStore({ reducer });

export default store;
