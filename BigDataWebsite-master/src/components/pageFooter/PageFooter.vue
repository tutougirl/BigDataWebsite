<template>
	<div class="footer">
		<!-- up -->
		<div class="footer-up">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="img">
						<img src="../../assets/img/home/logo-test.png" />
					</div>
				</el-col>
				<el-col :span="6">
					<div class="text">
						电话：18285137896
					</div>
				</el-col>
				<el-col :span="6">
					<div class="text">
						邮箱：zhzz@gzzhzz.com
					</div>
				</el-col>
				<el-col :span="6">
					<div class="text">
						地址：贵州省贵阳市贵阳国家高新技术产业开发区长岭南路33号天一国际广场23栋1单元负1层3号、1层1-2号
					</div>
				</el-col>
			</el-row>		
		</div>
		<!-- down -->
		<div class="footer-down">
			贵州智慧招展(集团)有限责任公司 版权所有-2022
		</div>
	</div>
</template>

<script>
  export default{
    name:"PageFooter",
		data(){
			return{
			}
		}
  }
</script>

<style scoped="scoped">
	.footer{
		width: 100%;
		height: 100%;
		background-color: #e9eff4;
		max-width: 1920px;
		margin: auto;
		padding-top: 4px;
	}
	.footer-up{
		width: 100%;
		height: 60px;
		display: flex;
	}
	.footer-down{
		width: 100%;
		height: 30%;
		background-color: #252B3A;
		font-size: 12px;
		text-align: center;
		margin-top: 30px;
		color: #FFFFFF;
		padding: 10px 0;
	}

	.footer-up-right{
		text-align: center;
		margin: auto;
	}
	.footer-up-right-img img{
		width: 30%;
		padding-left: 50px;
		padding-bottom: 10px;
	}
	.footer-up-right-text{
		padding-right: 30px;
		padding-bottom: 10px;
		padding-top: 15px;
		font-size: 18px;
	}
	  .el-row {
	    margin-bottom: 1px;
			width: 100%;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 2px;
	  }
		.text{
			font-size: 15px;
			padding-top: 25px;
		}
		@media screen and (max-width:1000px) {
			img{
				width: 40%;
				margin-left: 30%;
				margin-top: 10px;
				/* margin-bottom: 10px; */
			}
		}
		@media screen and (min-width:1000px) {
			img{
				width: 130px;
				height: 90px;
				margin-left: 30%;
				margin-bottom: 10px;
			}
		}
		
</style>
