import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/Stocks";
import portfolio from "./modules/Portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
		stocks,
		portfolio
  }
});
