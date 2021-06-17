<template>
  <v-app>
    <v-col
        app
        color="white"
        dark
        height="200"
        class="align-start pa-0 ma-0"
        hide-on-scroll
    >
      <v-col class="ma-0 pa-0">
        <div class="px-4 py-2 ma-0 gray_full_width align-start">
          <v-row class="justify-space-between d-flex pa-2">

            <p style="color: black" class="ma-0 pa-0">
              您好，欢迎访问这里是您的网站名称官网！
            </p>
            <p style="color: black" class="ma-0 pa-0">
              加入收藏 联系我们
            </p>


          </v-row>
        </div>
        <v-row class="mt-2 justify-center align-center">
          <v-img
              alt="Brand Logo"
              class="mr-2 my-0 pa-0"
              contain
              src="https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-200914113FQ10.png"
              transition="scale-transition"
              height="70"
          />
          <v-icon
              x-large
              color="primary darken-2"
          >
            mdi-phone
          </v-icon>
          <v-col>
            <p style="font-weight: bold;font-size: x-large" class="ma-0 pa-0 secondary--text">
              400-123-4567<br>
              138000000000
            </p>
          </v-col>
          <v-row class="align-center mx-4">
            <v-text-field solo outlined hide-details=true clearable label="请输入搜索关键词" height="50" width="200"
                          background-color="white" light color="blue"/>
            <v-btn height="50" color="primary">搜索</v-btn>
          </v-row>
        </v-row>
        <v-row class="mx-6 justify-center align-center">
          <v-btn
              v-for="m in menus"
              :key="m.name"
              height="50"
              min-width="150"
              color="primary"
              light
              class="v-size--x-large"
              @click="$router.push(m.route)"
          >
            {{ m.name }}
          </v-btn>

        </v-row>
      </v-col>
    </v-col>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="ma-0 pa-0">
      <div style="background-color: #191919;height: 400px;width: 100vw" class="ma-0 pa-4">
        <p style="color: lightgray;font-size: large;font-weight: bold">
          友情链接： 百度 腾讯 新浪 淘宝 微博
        </p>
        <hr class="mb-4"/>
        <v-row>
          <v-img contain src="https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-20091411392QK.jpg"
                 max-width="70" class="ms-3"/>
          <v-col class="col-2 white--text">
            <p>
              咨询热线:</p>
            <p style="font-size: xx-large;" class="secondary--text">400-123-4567</p>
            <p>
              手机：138000000000<br>
              邮箱：admin@youweb.com
            </p>
          </v-col>
          <v-row class="justify-center align-start mx-6 white--text">
            <v-col v-for="m in menus" :key="m.name" class="col-1.5">
              <a class="white--text mx-4 mb-6" style="font-weight: bold;font-size: large"
                 @click="$router.push(m.route)">{{ m.name }}</a>
              <p v-for="c in m.children" :key="c">{{c}}</p>

            </v-col>
          </v-row>

        </v-row>
        <hr class="mb-4"/>
        <p style="font-size: small;color: gray" class="ma-0">
          Copyright © 2012-2018 智能环保设备公司 版权所有 地址：广东省广州市天河区某某工业园88号 备案号：琼ICP备xxxxxxxx号
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {},

  data: () => ({
    menus: [{name: "网站首页", route: "/home", children: []}, {
      name: "关于我们",
      route: "/about",
      children: ["公司简介", "企业文化", "公司荣誉"]
    }, {
      name: "产品中心",
      route: "/product",
      children: ["土壤修复成套", "垃圾焚烧炉排", "污水处理", "电气成套", "非标钢结构系列", "油泥处理设备"]
    }, {name: "新闻动态", route: "/news", children: ["行业资讯", "公司动态"]}, {
      name: "工程案例",
      route: "/samples",
      children: ["土壤修复类", "污水治理类", "生活垃圾发电类", "污泥处理类"]
    }, {
      name: "在线留言",
      route: "/comment",
      children: []
    }, {name: "联系我们", route: "/contact", children: []}],
    selectedMenu: "网站首页",
  }),
};
</script>

<style scoped>
.gray_full_width {
  width: 100vw;
  background-color: lightgray;
}

/deep/ .v-toolbar__content {
  padding: 0;
  align-items: start;
  align-content: center;
}
</style>
