<template>
  <div class="content-list">
    <ul class="section-content">
      <li class="content-item" v-for="(item, index) in contentList" :key="index">
        <div>
					<!-- <el-card shadow="hover" style="height: 200px;"> -->
						<img class="item-img" :src="require(`../../assets/img/dataapi/${item.img}`)" alt="">
							<p class="item-name">{{item.name || item.title}}</p>
						</img>
						<div class="mask"  @click="goAblum(item)">
						  <svg class="icon" aria-hidden="true">
						    <use :xlink:href="Click"></use>
						  </svg>
						</div>
						<div>
							<el-dialog
								class="dialog"
								title="消息"
								:visible.sync="dialogVisible"
								>
								<span class="text">您好，API购买需线下咨询，联系方式：1XXXXXXXXXX</span>
								<span slot="footer" class="dialog-footer">
									<el-button class="buttonsize" @click="dialogVisible = false">取 消</el-button>
									<el-button  type="primary" @click="dialogVisible = false">确 定</el-button>
								</span>
							</el-dialog>
						</div>

					<!-- </el-card> -->
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
// import mixin from '../mixins'
import { ICON } from './index.js'

export default {
  name: 'content-list',
  props: {
    contentList: Array,
    path: String
  },
  data () {
    return {
      Click: ICON.Click,
			dialogVisible: false,
    }
  },
  methods: {
    goAblum (item) {
      this.dialogVisible=true
    },
  }
}
</script>

<style scoped="scoped">
	@media screen and (max-width:1000px) {		
		.text{
			font-size: 12px;
		}
		.dialog-footer{
			margin: -100px 0px 0px 0px;
		}
		.buttonsize{
			display: none;
		}
	}
	@media screen and (min-width:1000px) {
		.dialog{
			margin-top: 5%;
		}
	}
</style>

<style lang="scss" scoped src='./css/content-list.scss'>
</style>
