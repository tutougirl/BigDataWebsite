<template>
	<div>
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
		  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content" style="margin-left: 100px;margin-top: 10%;">
					<h2 style="margin-bottom: 5px;"><i class="el-icon-phone-outline"></i>电话热线：18285137896</h2>
					<h2 style="margin-bottom: 5px;"><i class="el-icon-location-outline"></i>地址：贵州省贵阳市南山湖区</h2>
					<h2 style="margin-bottom: 5px;">长岭南路33号天一国际广场23栋</h2>
					<h2 style="margin-bottom: 5px;"><i class="el-icon-message"></i>邮箱：2158413506@QQ.com</h2>
				</div>
			</el-col>
		  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" >
				<div class="grid-content" style="text-align: center;margin-left: 100px;">
					<img src="../assets/qrcode.jpg">
					<h2 style="margin-bottom: 20px;">官方微信</h2>
				</div></el-col>
		  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
		</el-row>
	</div>
</template>

<script>
  export default{
    // name:"ProductItem",
		props:{
			scrollTop:{
				type:Number,
				default:0
			},
		},
		data(){
			return{
				num: [{
					id:1,
					title:'联系方式',
					context:'电话热线：5888888'
				},
				{
					id:2,
					title:'公司地址',
					context:'123123'
				}]
			}
		}
  }
</script>

<style scoped="scoped">
	ul li{
		list-style: none;
	}
	a{
		color: var(--color-background);
	}
	@media screen and (max-width:1000px) {
		.mall-app-card-top h2 {
			top: 120px;
		}
		.mall-app-card:hover .mall-app-card-top h2{
			top:45px;
		}
		.mall-app-card-top i{
			top: 45px
		}
		.mall-app-card-top p{
			top:120px;
		}
		.mall-app-card{
			max-height: 300px;
		}
		.section-wrapper{
			overflow: scroll
		}
	}
	
	@media screen and (min-width:1000px) {
		.mall-app-card-top h2 {
			top: 175px;
		}
		.mall-app-card:hover .mall-app-card-top h2{
			top: 85px;
		}
		.mall-app-card-top p{
			top: 173px;
		}
		.mall-app-card-top i{
			top: 80px
		}
		.section-wrapper{
			flex-wrap: wrap;
		}
	}
	.mall-app{
		margin-left: auto;
		margin-right: auto;
		padding: 0 10px;
		max-width: 80%;
	}
	.mall-app-item {
		margin-left: -10px;
		margin-right: -10px;
	}
	
	.mall-app-item:before,
	.mall-app-item:after {
		content: " ";
		display: table;
		box-sizing: inherit;
	}
	
	.mall-app-item {
		flex: 1;
		min-width: 600px;
		padding: 10px;
		/* background: chocolate; */
	}
	
	.mall-app-card {
		position: relative;
		height: 270px;
		width: 600px;
		overflow: hidden;
		background-color: grey;
		text-align: center;
		cursor: pointer;
	}
	
	.mall-app-card-bg {
		position: absolute;
		z-index: 0;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		transition: 0.2s;
	}
	
	.mall-app-card-top {
		position: relative;
		height: 50%;
	}
	
	.mall-app-card-top i {
		display: block;
		position: absolute;
		right: 0;
		left: 0;
		width: 48px;
		height: 48px;
		margin: 0 auto;
		background-size: cover;
		background-position: center;
		transition: 0.2s;
	}
	
	.mall-app-card-top h2 {
		position: absolute;
		right: 0;
		left: 0;
		font-size: 20px;
		line-height: 28px;
		color: #fff;
		transition: 0.2s;
	}
	
	.mall-app-card-top h2:before {
		content: "";
		position: absolute;
		top: 100%;
		right: 0;
		left: 0;
		width: 0;
		height: 4px;
		margin: 15px auto;
		background-color: var(--color-background);
		transition: 0.2s 0.2s;
	}
	
	.mall-app-card-top p {
		position: absolute;
		right: 0;
		left: 0;
		padding-left: 40px;
		padding-right: 40px;
		margin: 10px auto 0;
		font-size: 14px;
		line-height: 24px;
		color: #fff;
		opacity: 0;
		transition: 0.2s;
	}
	
	.mall-app-card-bottom {
		position: relative;
		height: 50%;
		padding-top: 50px;
		font-size: 14px;
		line-height: 24px;
		color: #fff;
	}
	
	.mall-app-card-bottom li {
		margin-bottom: 10px;
	}
	
	.mall-app-card-bottom li a:hover {
		color: #FFFFFF;
	}
	.mall-app-card:hover .mall-app-card-bg {
		-ms-transform: scale(1.05);
		transform: scale(1.05);
	}
	
	.mall-app-card:hover .mall-app-card-top i {
		opacity: 0;
	}
	
	.mall-app-card:hover .mall-app-card-top h2:before {
		width: 68px;
	}
	
	.mall-app-card:hover .mall-app-card-top p {
		margin-top: 0;
		opacity: 1;
	}
	
	.section-wrapper {
		width: 100%;
		padding-left: 30px;
		padding-right: 30px;
		margin-left: auto;
		margin-right: auto;
		height: auto;
		display: flex;
	}
	
	  .el-col {
	    border-radius: 4px;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
</style>
