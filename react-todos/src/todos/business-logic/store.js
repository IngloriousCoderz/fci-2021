import { configureStore } from "@reduxjs/toolkit";
import form from "../form/form.slice";
import list from "../list/list.slice";

const store = configureStore({ reducer: { form, list } });

export default store;
