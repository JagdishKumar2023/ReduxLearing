import { createStore } from "redux";

import rootRenducer from "./reducer/index";

const Store = createStore(rootRenducer);

export default Store;
