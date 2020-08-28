<template>
	<div class="small">
	<canvas id="myChart" width="400" height="300"></canvas>
	</div>
</template>

<script>
	import Chart from 'chart.js';
	const ylabels = []
	const xlabels = []

	async function chartIt() {
		await getData()
		var ctx = 'myChart';
		var myChart = new Chart(ctx, {
			type: "line",
			data: {
				labels: ylabels,
				datasets: [
					{
						label: "AAPL",
						backgroundColor: "rgba(225,10,10,0.3)",
						borderColor: "rgba(225,103,110,1)",
						borderWidth: 1,
						pointStrokeColor: "#fff",
						pointStyle: "crossRot",
						data: xlabels[0],
						cubicInterpolationMode: "monotone",
						spanGaps: "false",
						fill: "false"
					},
					{
						label: "MSFT",
						// backgroundColor: "rgba(10,225,10,0.3)",
						borderColor: "rgba(10,103,110,1)",
						borderWidth: 1,
						pointStrokeColor: "#888",
						pointStyle: "crossRot",
						data: xlabels[1],
						cubicInterpolationMode: "monotone",
						spanGaps: "false",
						fill: "false"
					}
				]
			},
			options: {
			}
		});
		console.log('myChart Object: '+myChart)
	}
	async function getData() {
		var test = undefined
		await fetch('https://fintech-114.herokuapp.com/api/test/')
		.then(response => response.json())
		.then(data => (test = data));
		for (let i = 0; i < Object.values(test).length; i++) {
			xlabels.push(Object.values(test)[i])
		}
		for (let i = 0; i < Object.values(test)[0].length; i++) {
			ylabels.push(i+1)
		}
	}
	export default {
		name:'Main',
		components: {
			
		},
		data() {
			return {}
		},
		mounted() {
			chartIt()
		},
		methods: {
		}
	}
</script>

<style>
  .small {
	max-width: 400px;
	margin:  10px auto;
  }
</style>