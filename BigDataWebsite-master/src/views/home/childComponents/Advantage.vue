<template>
	<div class="advantage">
		<div class="title-max">我们提供什么</div>
		<advantage-item class="up animate__animated" :class="{'animate__fadeInDown':scrollTop>200}">
			<!-- <div slot="header-title">测试文本</div> -->
			
<!-- 			<div slot="text">
				测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
			</div> -->
		</advantage-item>
		<div class="animated">
			<advantage-item class="down animate__animated" :class="{'animate__fadeInUp':scrollTop>200}">
				<div slot="header-icon">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dashuju"></use>
					</svg>
				</div>
				<div slot="title-min">数据交易</div>
				<!-- <div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div> -->
			</advantage-item>
			<advantage-item class="down delayOne animate__animated" :class="{'animate__fadeInUp':scrollTop>200}">
				<div slot="header-icon">
						<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dashujufuwupingtai
"></use>
					</svg>
				</div>
				<div slot="title-min">数据加工</div>
				<!-- <div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div> -->
			</advantage-item>
			<advantage-item class="down delayTwo animate__animated" :class="{'animate__fadeInUp':scrollTop>200}">
				<div slot="header-icon">
						<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dashuju2"></use>
					</svg>
				</div>
				<div slot="title-min">元数据管理</div>
				<!-- <div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div> -->
			</advantage-item>
				<advantage-item class="down delayTwo animate__animated" :class="{'animate__fadeInUp':scrollTop>200}">
				<div slot="header-icon">
						<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zhuzhuangtu"></use>
					</svg>
				</div>
				<div slot="title-min">数据分析</div>
				<!-- <div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div> -->
			</advantage-item>
				<advantage-item class="down delayTwo animate__animated" :class="{'animate__fadeInUp':scrollTop>200}">
				<div slot="header-icon">
						<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dashuju1"></use>
					</svg>
				</div>
				<div slot="title-min">数据接入</div>
				<!-- <div slot="text">
					测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
				</div> -->
			</advantage-item>
		</div>
	</div>
</template>

<script>
	
	import AdvantageItem from './AdvantageItem.vue'
	import iconfont from '@/assets/font/iconfont'
	
	export default {
		name: "Advantage",
		components:{
			AdvantageItem
		},
		props:{
			scrollTop:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style scoped="scoped">
	@media screen and (max-width:1000px) {
		.advantage {
			width: 100%;
			flex: 1;
		}
		.animated{
			max-width: 540px;
		}
		.up{
			max-width: 300px;
		}
	}

	@media screen and (min-width:1000px) {
		.advantage {
			width: 100%;
			flex: 1;
		}
		.animated{
			max-width: 1000px;
		}
		.up{
			max-width: 830px;
		}
	}
	.advantage{
		padding: 50px 0;
		max-width: 1920px;
		margin: auto;
	}
	
	.up{
		margin-left: auto;
		margin-right: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.down{
		max-width: 300px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.animated{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	.delayOne{
		-webkit-animation-delay: 0.3s;
	}
	.delayTwo{
		-webkit-animation-delay: 0.6s;
	}
	.title-max {
		margin-top: 0.58438rem;
		font-size: 1.925rem;
		line-height: 1.2;
		font-weight: 700;
		color: #42495b;
		text-align: center;
	}
	.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
