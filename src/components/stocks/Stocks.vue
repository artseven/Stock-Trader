<template>
	<div>
		<Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
	</div>
</template>

<script>
import Stock from './Stock.vue'
import stocks from '../../data/stocks';

export default {
	components: {
		Stock
	}
}
</script>

<style>

</style>