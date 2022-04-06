<template>
	<div class="news">
			<!-- 轮播 -->
				<el-carousel class="news-media-carousel" :height="bannerH*0.6+'px'">
					<el-carousel-item>
						<img style="width: 100%; height: auto;" class="bannertt" src="~assets/img/image-01-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img style="width: 100%; height: auto;" class="bannertt" src="~assets/img/image-02-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img style="width: 100%; height: auto;" class="bannertt" src="~assets/img/image-03-1200x800.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img style="width: 100%; height: auto;" class="bannertt" src="~assets/img/image-04-1200x800.jpg" />
					</el-carousel-item>
				</el-carousel>
	</div>
</template>

<script>
	export default {
		name: "News",
		components: {
		},
		data() {
			return {
				bannerH:this.setBannerH1,
			}
		},
		methods: {
				setBannerH(){
					this.bannerH=document.getElementsByClassName("bannertt")[0].height
				},
				setBannerH1(){
					var bwidth=document.getElementsByClassName("bannertt")[0].width;
					var bheight=document.getElementsByClassName("bannertt")[0].height;
					var ssss=document.body.clientWidth;
					this.bannerH=ssss*(bheight/bwidth);
				},
			},
		mounted(){
				this.setBannerH1()//初始值根据图片的缩放比率和屏幕大小来定，不然走马灯开始时候就会默认一个值
				window.addEventListener('resize',()=>{
					this.setBannerH()
				},false)
		}
	}
</script>

<style scoped="scoped">
	.news {
		width: 90%;
		padding: 50px 0px;
		max-width: 1920px;
		height: 100%;
		margin: auto;
	}
	.news-media-carousel {
		border-radius: 30px !important;
		overflow: hidden;
	}
</style>
