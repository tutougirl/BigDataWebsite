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
						<el-dialog
						  title="消息"
						  :visible.sync="dialogVisible"
							style="margin-top: 5%;"
						  width="30%">
						  <span>您好，API购买需线下咨询，联系方式：1XXXXXXXXXX</span>
						  <span slot="footer" class="dialog-footer">
						    <el-button @click="dialogVisible = false">取 消</el-button>
						    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						  </span>
						</el-dialog>
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

<style lang="scss" scoped src='./css/content-list.scss'>
</style>
