<template >
  <div class="goodsL">
    <el-table :data="goodsList">
      <el-table-column prop="id" label="商品ID" width="80" align="center">
      </el-table-column>
      <el-table-column prop="title" label="商品名称" width="300" align="center">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100" align="center">
        <template slot-scope="scope"> {{ scope.row.price }} 元</template>
      </el-table-column>
      <el-table-column prop="desc" label="详情" align="center">
      </el-table-column>
      <el-table-column prop="kucun" label="库存" width="100" align="center">
        <template slot-scope="scope"> {{ scope.row.kucun }} 件</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="updateGoods(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑新增 -->
    <el-dialog title="编辑商品" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.kucun"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <template>
            <viewer>
              <img width="200" :src="form.img" />
            </viewer>
          </template>
          <!-- <el-input v-model="form.img"></el-input> -->
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="种类" prop="type">
          <template>
            <el-select v-model="form.type">
              <el-option
                v-for="key in Object.keys(templateType)"
                :key="key"
                :label="templateType[key]"
                :value="Number(key)"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="热销">
          <template>
            <el-select v-model="form.hot">
              <el-option
                v-for="key in Object.keys(templateHot)"
                :key="key"
                :label="templateHot[key]"
                :value="Number(key)"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>
        <!-- <el-upload
          class="upload-demo"
          action="http://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateGoodsTrue()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "goodsL",
  data() {
    return {
      goodsList: [],
      dialogVisible: false,
      form: {
        id: "",
        title: "",
        price: "",
        desc: "",
        kucun: "",
        type: "",
        hot: "",
        img: "",
      },
      templateType: {
        1: "零食",
        2: "生活会用品",
      },
      templateHot: {
        1: "热卖",
        0: "非热卖",
      },
    };
  },
  mounted() {
    this.goods();
  },
  methods: {
    goods() {
      let res = this.$axios.get("http://127.0.0.1:7001/goods").then((res) => {
        this.goodsList = res.data.filter((item) => item.type == "1");
      });
    },

    //  修改商品信息
    updateGoods(info) {
      console.log(info);
      Object.keys(info).forEach((key) => {
        this.form[key] = info[key];
      });
      console.log(this.form);
      this.dialogVisible = true;
    },
    updateGoodsTrue() {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:7001/updateGoods",
        data: {
          id: this.form.id,
          title: this.form.title,
          price: this.form.price,
          desc: this.form.desc,
          kucun: this.form.kucun,
          type: this.form.type,
          hot: this.form.hot,
          // ImageUrl: this.form.ImageUrl,
        },
      }).then((res) => {
        // console.log(res)
        window.location.reload();
      });
    },
    //删除商品
    handleDelete(id) {
      console.log(id);
      this.$confirm("确认删除该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get("http://127.0.0.1:7001/delgoods", {
              params: {
                id: id,
              },
            })
            .then((result) => {
              this.$message({
                message: "删除成功！",
                type: "success",
                center: true,
                duration: 1500,
              });
            });
          window.location.reload();
        })
        .catch(() => {
          this.$message({
            message: "已取消删除",
            type: "info",
            center: true,
            duration: 1500,
          });
        });
    },
  },
};
</script>
<style scoped>
.el-table {
  width: 90%;
  margin: 0 auto;
}
</style>