<template>
	<div class="block" ref="homePage">
		<el-carousel :height="clientHeight+'px'">
			<!-- <el-carousel :height="600+'px'" > -->
			<el-carousel-item v-for="(item, index) of imgArray " :key="index">
				<div class="carousel-text">
					<div class="carousel-text-max">{{item.title}}</div>
					<div class="carousel-text-min">
						{{item.des}}
					</div>
					<div class="carousel-text-min">
						{{item.des1}}
					</div>
					<!-- <div class="carousel-button">
						<el-button class="el-buttons" type="primary" round>查看详情</el-button>
					</div> -->
				</div>
				<!-- <img src="~assets/img/bg-1.jpg" /> -->
				<img :src="item.srcc" class="carousel-img"/>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				clientHeight: '',
				imgArray:[
					{title:'贵阳大数据交易平台',des:"打通数据壁垒，促进数据流通",des1:"发掘数据价值，构建数据生态",srcc:require(`../../assets/img/bg-3.jpg`)},
					{title:'交易一体化',des:"全方位，多层次,赋能千万行业",srcc:require(`../../assets/img/bg-2.jpg`)},
					{title:'数据融合，精准分析',des:"联动创新，顺势未来",srcc:require(`../../assets/img/bg-1.jpg`)},
					]
			};
		},
		watch: {
			// 如果 clientHeight 发生改变，这个函数就会运行
			clientHeight() {
				this.changeFixed(this.clientHeight);
			}
		},
		mounted() {
			this.clientHeight = document.documentElement.clientHeight;
			window.onresize = function temp() { // 在窗口或框架被调整大小时触发
				this.clientHeight = document.documentElement.clientHeight;
			};
		},
		methods: {
			changeFixed(clientHeight) { // 动态修改样式
			console.log(clientHeight)
				this.$refs.homePage.style.height = clientHeight + 'px';
				console.log(this.$refs.homePage.style.height)
			}
		}
	}
</script>

<style scoped="scoped">
	
	@media screen and (max-width:1000px) {
		.carousel-text {
			position: absolute;
			width: 100%;
			z-index: 9999;
			margin: auto;
			top: 50%;
			left: 50%;
			margin-top: -100px;
			margin-left: -150px;
			max-width: 300px;
		}
		.carousel-text-max {
			font-size: 33px;
			color: #FFFFFF;
			text-align: center;
			padding-bottom: 10px;
			font-weight: bold;
		}
		
		.carousel-text-min {
			font-size: 20px;
			color: #FFFFFF;
			text-align: center;
		}
		
		.el-buttons{
			font-weight: bold;
			padding: 10px 10px;
			border-radius: 15px;
			font-size: 10px;
			border-color: var(--color-background);
			background-color: var(--color-background);
		}
	}
	@media screen and (min-width:1000px) {
		
		.carousel-text {
			position: absolute;
			width: 100%;
			z-index: 9999;
			margin: auto;
			top: 50%;
			left: 50%;
			margin-top: -200px;
			margin-left: -400px;
			max-width: 800px;
		}
		.carousel-text-max {
			font-size: 60px;
			color: #FFFFFF;
			text-align: center;
			padding-top: 130px;
			padding-bottom: 10px;
			font-weight: bold;
		}
		
		.carousel-text-min {
			font-size: 35px;
			color: #FFFFFF;
			margin-top: 20px;
			text-align: center;
		}
		
		.el-buttons{
			font-weight: bold;
			padding: 20px 50px;
			border-radius: 45px;
			font-size: 20px;
			border-color: var(--color-background);
			background-color: var(--color-background);
		}
		
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}


	.el-carousel__item is-active is-animating {
		position: relative;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.block {
		max-width: 1920px;
		margin: auto;
	}

	.block img {
		filter: brightness(70%);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	

	.carousel-button {
		width: 100%;
		text-align: center;
		padding-top: 45px;
	}
	
	.el-buttons{
		font-weight: bold;
		padding: 20px 50px;
		border-radius: 45px;
		font-size: 20px;
		border-color: var(--color-background);
		background-color: var(--color-background);
	}
	
	.el-buttons:hover{
		border-color: #99A9BF;
		background-color: #99A9BF;
	}
</style>
