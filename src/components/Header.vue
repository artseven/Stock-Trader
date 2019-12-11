<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"
        >Stock Trader</router-link
      >
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link
            to="/portfolio"
            activeClass="active"
            class="nav-link"
            tag="li"
            ><a class="nav-link">Portfolio</a></router-link
          >
          <router-link
            to="/stocks"
            activeClass="active"
            class="nav-link"
            tag="li"
            ><a class="nav-link">Stocks</a></router-link
          >
        </ul>
        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | currency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-link"><a href="" @click="endDay">End Day</a></li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen; $event.preventDefault()"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
              <li><a class="dropdown-item" href="#" @click="loadDataFromDB">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapGetters(["funds"])
  },
  methods: {
    ...mapActions({randomizeStocks: 'randomizeStocks', fetchData: 'loadData'}),
    endDay(e) {
      e.preventDefault();
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data);
    },
    loadDataFromDB() {
      this.fetchData();
    }
  }
};
</script>

<style></style>
