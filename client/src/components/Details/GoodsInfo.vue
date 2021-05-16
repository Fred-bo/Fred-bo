<template>
  <!-- 商品详情页右边俩按钮的盒子组件 -->
  <div class="goodsinfo">
    <ul class="goodsbox">
      <li class="title" v-html="goodsinfo.name"></li>
      <li class="intro" v-html="goodsinfo.intro"></li>
      <li class="price">
        <i class="iconfont icon-emijiage"></i>
        <span class="newprice" v-cloak
          >现价：<span>￥{{ goodsinfo.price }}</span></span
        >
        <span class="oldprice" v-cloak
          >原价：<span>￥{{ goodsinfo.oldprice }}</span></span
        >
      </li>

      <li>
        <i class="iconfont icon-qq"></i>
        <span v-cloak class="contact">名称：{{ goodsinfo.title }}</span>
      </li>
      <li>
        <i class="iconfont icon-weixin"></i>
        <span v-cloak class="contact">描述：{{ goodsinfo.desc }}</span>
      </li>
      <li>
        <i class="iconfont icon-dianhuahover"></i>
        <span v-cloak class="contact">库存：{{ goodsinfo.kucun }}</span>
      </li>
    </ul>
    <div class="goodsbtn" id="goodsbtn">
      <button type="button" id="addcar" @click="addcar(goodsinfo.id)" v-cloak>
        加入购物车
      </button>
      <button type="button" id="findcar" @click="findcar" v-cloak>
        查看购物车
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsid: undefined,
      pageNum: undefined,
    };
  },
  props: ["goodsinfo"],
  mounted() {
    this.goodsid = this.$route.query.goodsid;
    this.pageNum = this.$$route.query.pageNum;
  },
  methods: {
    //加入购物车
    addcar(id) {
      this.$axios("http://127.0.0.1:7001/addcar", {
        params: {
          id: id,
        },
      }).then((result) => {
        if (result.data.code == 2000) {
          this.$message({
            message: "添加成功",
            type: "success",
            center: true,
            duration: 1500,
          });
        } else if (result.data.code == 4001) {
          this.$message({
            message: "请勿重复添加 ！",
            type: "warning",
            center: true,
            duration: 1500,
          });
        }
      });
    },
    //查看购物车
    findcar() {
      this.$router.push({
        name: "Car",
      });
    },
  },
};
</script>

<style scoped="scoped">
.goodsinfo {
  min-width: 600px;
  height: 429px;
  position: absolute;
  top: 40px;
  left: 450px;
}

.userbox {
  position: relative;
  height: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d9d9d9;
}

.userbox p {
  position: absolute;
  left: 52px;
  top: 10px;
  font-size: 15px;
}

.goodsbox {
  line-height: 30px;
  height: 280px;
  padding-left: 28px;
}

.goodsbox li {
  margin-top: 13px;
  display: block;
}

.goodsbox .title {
  font-size: 16px;
  color: #17233d;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.goodsbox .intro {
  font-size: 14px;
  color: #616776;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.price .newprice {
  margin-left: 33px;
  font-size: 18px;
  color: #616776;
}

.newprice span {
  font-size: 18px;
  color: red;
  font-weight: bold;
}

.price .oldprice {
  margin-left: 20px;
  font-size: 16px;
  color: #616776;
  text-decoration: line-through;
}

.oldprice span {
  font-size: 16px;
}

li {
  position: relative;
}

li i {
  font-size: 18px;
  position: absolute;
  top: 3px;
  color: #5c6270;
}

.contact {
  margin-left: 34px;
  font-size: 16px;
  color: #616776;
}

[v-cloak] {
  display: none;
}

.goodsbtn {
  margin-top: 10px;
  margin-left: 60px;
}

.goodsbtn button {
  height: 39px;
  width: 190px;
  margin-right: 40px;
  border: 1px solid red;
  cursor: pointer;
  border-radius: 6px;
}

#addcar {
  background-color: #f5f3ef;
  border: 1px solid #df3033;
  color: #df3033;
  outline: none;
  font-size: 18px;
}

#addcar:hover {
  background-color: #df3033;
  color: #ffffff;
}

#findcar {
  background-color: #cf0010;
  border: 1px solid #cf0010;
  color: #ffffff;
  outline: none;
  font-size: 18px;
}

#findcar:hover {
  background-color: #df3033;
  border: 1px solid #df3033;
  color: #ffffff;
}
</style>
