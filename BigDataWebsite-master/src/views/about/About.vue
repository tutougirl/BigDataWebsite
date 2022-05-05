<template>
	<div class="about">
		
		<!-- 页头 -->
		<page-header :isShowMenu="isShowMenu" :englishText="chineseText" 
			 :imgSrc="imgSrc"/>
		<div class="public-body" >
			<advantage-item class="active">
				<!-- <div slot="header-title">About Us</div> -->
				<div slot="title-max">公司介绍</div>
				<div slot="text" class="textIn">
					贵州智慧招展(集团)有限责任公司，于2020年3月注册成立，是在贵阳市提出“要推动招商模式变革，推动招商引业智慧化、专业化、市场化、精准化”，以及深化市场化招商机制改革的时代背景下，部署组建的国有运营公司。集团依托贵阳作为“中国数谷”的大数据产业发展优势，绘制产业和企业图谱，建设“贵州大数据智慧招商平台”，结合贵阳市“强省会”五年行动方案，聚焦“两图两库两池”，专注“招商引资全生命周期”管理，通过“智慧平台”、“招商服务”、“产业智库”等服务，着力数智招商、数智营商，创新聚能，聚力打造“贵州招商引资新IP”。公司注册资本10亿元，为贵阳国家高新技术产业开发区所属全资国有企业。
				</div>
			</advantage-item>
			<aboutus class="imgShow"/>
			<advantage-item class="active">
				<!-- <div slot="header-title">Background</div> -->
				<div slot="title-max">成立背景</div>
				<div slot="text" class="textIn">
					贵州作为全国首个国家级大数据综合实验区，根据国家发展改革委、工业和信息化部、中央网信办发函批复，国家大数据（贵州）综合试验区将“在中国数据资源管理与共享开放、数据中心整合、数据资源应用等方面开展系统性试验”。成立数据交易公司，市场化运作数据产业是国家大数据综合实验区的开展数据交易先行先试的重要途径之一。近年来随着大数据的广泛普及和应用，数据资源的价值逐步得到重视和认可，数据交易需求也在不断增加。大数据交易可以打破信息孤岛及行业信息壁垒，汇聚海量高价值数据，对接数据市场的多样化需求，完善产业生态环境，实现数据价值的最大化，对推进大数据产业创新发展方面具有深远意义。
<br><br/>
目前大数据交易有交易所模式、电商模式、API 模式，大数据的价值通过数据确权、清洗、交易等形式得以释放和体现。数据交易平台是数据交易行为的重要载体，可以促进数据资源整合、规范交易行为、降低交易成本、增强数据流动性，成为当前各地促进数据要素流通的主要举措之一。
				</div>
			</advantage-item>
			<advantage-item class="active">
				<!-- <div slot="header-title">Contact Us</div> -->
				<div slot="title-max">联系我们
				<el-divider style="color: #00AAFF;" content-position="center"></el-divider>
				</div>
				<div slot="text" class="textIn1">
					<h3><i class="el-icon-phone-outline"></i>电话热线：18285137896</h3>
					<h3><i class="el-icon-location-outline"></i>地址：贵州省贵阳市南山湖区长岭南路33号天一国际广场23栋</h3>
					<h3><i class="el-icon-message"></i>邮箱：2158413506@QQ.com</h3>
					<img class="wechat" src="./assets/qrcode.jpg">
					<h3 style="margin-bottom: 20px;">官方微信</h3>
				</div>
			</advantage-item>
			
		</div>
		<contact-item/>
		<!-- 底部页脚 -->
		<!-- <page-footer></page-footer> -->
	</div>
</template>

<script>
	
	import PageHeader from 'components/pageHeader/PageHeader.vue'
	import PageFooter from 'components/pageFooter/PageFooter.vue'
	import AdvantageItem from 'views/home/childComponents/AdvantageItem1.vue'

	import Aboutus from './child/aboutus.vue'
	import contactItem from './child/contactItem.vue'
	
  export default{
    name:"About",
		components:{
			PageHeader,
			PageFooter,
			AdvantageItem,
			Aboutus,
			contactItem
		},
		data() {
			return {
				scrollTop: 0,
				isShowMenu: true,
				englishText: "Demo-Test-Demo-Test",
				chineseText: "贵州智慧招展(集团)有限责任公司",
				imgSrc: "homepage-mall-enterprise-bg.jpg"
			}
		},
		methods: {
			// 保存滚动值，这是兼容的写法
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.scrollTop >= 100 ? this.isShowMenu = false : this.isShowMenu = true
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true)
		},
		destroyed() {
			// 离开该页面需要移除这个监听的事件，不然会报错
			window.removeEventListener('scroll', this.handleScroll)
		}
  }
</script>

<style scoped="scoped">
	.active{
		margin: 30px 0;
	}
/* 	.textIn{
		text-align: center;
		margin-left: 10%;
		width: 80%;
	} */
	/* .imgShow{
		margin-top: 10;
	} */
	
	@media screen and (min-width:1000px) {
		.textIn{
			text-align: center;
			margin-left: 10%;
			width: 80%;
		}
		.textIn1{
			display: none;
		}
	}
	@media screen and (max-width:1000px) {
		.textIn{
/* 			text-align: center;
			margin-left: 10%;
			width: 80%; */
			font-size: 14px;
			text-align: justify;
		}
		.textIn1{
			text-align: center;
			margin-left: 10%;
			width: 80%;
			font-size: 14px;
		}
		.wechat{
			margin-top: 20px;
			width: 180px;
		}
	}
</style>
