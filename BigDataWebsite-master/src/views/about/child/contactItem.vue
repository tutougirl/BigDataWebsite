<template>
	<div>
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content1"></div></el-col>
		  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content1" style="margin-left: 10%;margin-top: 10%;">
					<h2 style="margin-bottom: 5px;"><i class="el-icon-phone-outline"></i>电话热线：18285137896</h2>
					<h2 style="margin-bottom: 5px;"><i class="el-icon-location-outline"></i>地址：贵州省贵阳市南山湖区</h2>
					<h2 style="margin-bottom: 5px;">长岭南路33号天一国际广场23栋</h2>
					<h2 style="margin-bottom: 5px;"><i class="el-icon-message"></i>邮箱：2158413506@QQ.com</h2>
				</div>
			</el-col>
		  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" >
				<div class="grid-content2" style="text-align: center;margin-left: 100px;">
					<img class="qrcode" src="../assets/qrcode.jpg">
					<h2 class="wechat" style="margin-bottom: 20px;">官方微信</h2>
				</div></el-col>
		  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content2"></div></el-col>
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
	@media screen and (max-width:1000px) {
		.grid-content1 {
			display: none;
		}
		.grid-content2 {
			display: none;
		}
	}
	
	@media screen and (min-width:1000px) {
		.el-col {
			border-radius: 4px;
		}
		.grid-content1 {
			border-radius: 4px;
			min-height: 36px;
		}
		.grid-content2 {
			border-radius: 4px;
			min-height: 36px;
		}
	}
	
	

</style>
