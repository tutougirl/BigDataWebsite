<template>
	<div class="footer">
		<!-- up -->
		<div class="footer-up">
						<img class="img" src="../../assets/img/home/logo-test.png" />
					<span class="text">
						电话：18285137896
					</span>
					<span class="text">
						邮箱：zhzz@gzzhzz.com
					</span>
					<span class="text">
						地址：贵州省贵阳市贵阳国家高新区长岭南路33号天一国际广场23栋
					</span>
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
		border-top: 40px solid #252B3A;
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
	.img{
		margin-left: 15%;
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
		.text{
			font-size: 15px;
			margin-top:35px;
			margin-left:30px;
		}
		@media screen and (max-width:1000px) {
			.img{
				width: 90px;
				height: 80px;
				margin-top: 20px;
				margin-left:5%;
			}
			.footer{
				height: 100%;
			}
			.footer-up{
				overflow-x: scroll;
			}
			.text{
				min-width: 180px;
				margin-left:10px;
				display: inline-block;
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
