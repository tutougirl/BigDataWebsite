<!--
 * @Author: he yan ying
 * @Date: 2021-11-23 16:19:47
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-01-04 09:54:48
 * @Description: 
-->
<template>
	<div class="join-us">
		<div class="container">
			<!-- <span class="container-text">{{text}}</span> -->
			<marquee :lists="lists"></marquee>
		</div>
	</div>
</template>

<script>
	
	import Marquee from 'components/marquee/Marquee.vue'
	
	export default {
		name: "JoinUs",
		components:{
			Marquee
		},
		data() {
			return {
				lists: [
					'打通数据壁垒，促进数据流通，发掘数据价值，构建数据生态'
				]
			}
		}
	}
</script>

<style scoped="scoped">
	@media screen and (max-width: 1000px) {
		.container {
			max-width: 960px;
		}

		.container-text {
			font-size: 20px;
			font-weight: 300;
		}
	}

	@media screen and (min-width: 1000px) {
		.container {
			max-width: 1200px;
		}

		.container-text {
			font-size: 30px;
			font-weight: 700;
		}
	}

	.join-us {
		width: 100%;
		color: #FFFFFF;
		background-color: var(--color-background);
		padding: 20px 0;
		max-width: 1920px;
		margin: auto;
	}

	.container {
		width: 100%;
		padding-right: 0.9375rem;
		padding-left: 0.9375rem;
		margin-right: auto;
		margin-left: auto;
		text-align: center;
	}
</style>
