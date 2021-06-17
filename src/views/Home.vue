<template>
  <v-col class="ma-0 pa-0">
    <v-img
        contain
        :src="imgs[currentImgIndx]"
        @click="changeImg">
    </v-img>
    <HomeSubtitle english="PRODUCTS" chinese="产品中心"/>
    <v-row class="justify-center align-center">
      <v-btn v-for="p in productsCategory" :key="p" class="mx-4" color="primary" light>
        {{ p }}
      </v-btn>
    </v-row>
    <v-row class="ma-4 justify-center align-center">
      <v-card v-for="p in products" :key="p.name" class="col-3 ma-2">
        <v-img :src="p.imgUrl" class="ma-2"/>
        <p>{{ p.name }}</p>
      </v-card>
    </v-row>
    <v-row class="justify-center align-center mt-2 mb-6">
      <v-btn width="200" height="50" x-large>
        查看更多
      </v-btn>
    </v-row>
    <div
        style="background-image: url('https://demoall.yiyocms.com/10979/template/default/pc/skin/images/ixbannerbg1.png');height: 200px;vertical-align: middle;display: table-cell;width: 100vw"
        class="ma-0 align-center">
      <v-row class="align-center justify-space-around">
        <v-col class="align-center justify-center col-6">
          <p class="white--text mb-1" style="font-size: x-large">
            智能环保装备专业制造、销售、租赁及综合运营商
          </p>
          <p class="white--text mb-0" style="font-size: x-large">
            提供一站式专业服务！ 咨询热线：400-123-4567
          </p>
        </v-col>
        <v-btn x-large>
          立即咨询
        </v-btn>
      </v-row>
    </div>
    <HomeSubtitle english="OUR ADVANTAGES" chinese="产品优势"/>
    <v-row class="justify-center align-center">
      <v-col v-for="a in advantages" :key="a.name" class="col-3">
        <v-row class= "justify-center align-center mb-2">
          <v-img contain :src="a.imgUrl" max-width="100" />
        </v-row>
        <v-row class="justify-center align-center">
          <p style="font-size: x-large" class="secondary--text">{{a.name}}</p>
          <p>{{a.description}}</p>
        </v-row>
      </v-col>
    </v-row>
    <HomeSubtitle english="CASE" chinese="工程案例"/>
    <v-row class="justify-center align-center">
      <v-btn v-for="s in samplesCategory" :key="s" class="mx-4" color="primary" light>
        {{ s }}
      </v-btn>
    </v-row>
    <v-row class="ma-4 justify-center align-center">
      <v-card v-for="s in samples" :key="s.name" class="col-3 ma-2">
        <v-img :src="s.imgUrl" class="ma-2" contain max-width="400" height="300"/>
        <v-row class="justify-center align-center">
          <p style="font-size: x-large" class="secondary--text">{{s.name}}</p>
          <p>{{s.description}}</p>
        </v-row>
      </v-card>
    </v-row>
    <v-row class="justify-center align-center mt-2 mb-6">
      <v-btn width="200" height="50" x-large>
        查看更多
      </v-btn>
    </v-row>
    <div
        style="background-image: url('https://demoall.yiyocms.com/10979/template/default/pc/skin/images/ixbannerbg1.png');height: 200px;vertical-align: middle;display: table-cell;width: 100vw"
        class="ma-0 align-center">
      <v-row class="align-center justify-space-around">
        <v-col class="align-center justify-center col-6">
          <p class="white--text mb-1" style="font-size: x-large">
            智能环保装备专业制造、销售、租赁及综合运营商
          </p>
          <p class="white--text mb-0" style="font-size: x-large">
            提供一站式专业服务！ 咨询热线：400-123-4567
          </p>
        </v-col>
        <v-btn x-large>
          立即咨询
        </v-btn>
      </v-row>
    </div>

    <v-row>

    </v-row>
  </v-col>
</template>

<script>
// @ is an alias to /src

import HomeSubtitle from "@/components/HomeSubtitle";

export default {
  name: 'Home',
  data: () => ({
    imgs: ["https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-20091414263L11.jpg", "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-20091414263DK.jpg"],
    currentImgIndx: 0,
    productsCategory: ["土壤修复成套", "垃圾焚烧炉排", "污水处理", "电气成套", "非标钢结构系列", "油泥处理设备"],
    samplesCategory: ["土壤修复类", "污水治理类", "生活垃圾发电类", "污泥处理类"],
    products: [{
      name: "产品名称",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141AG4949.jpg"
    }, {
      name: "产品名称",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141AF0D3.jpg"
    }, {
      name: "产品名称",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141A6453Y.jpg"
    }, {
      name: "产品名称",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141A62N09.jpg"
    }, {name: "产品名称", imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141A6155D.jpg"}, {
      name: "产品名称",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141A500a0.jpg"
    },],
    advantages: [{
      name: "研发优势",
      description: "拥有研发技术人员30 余人，公司每年研发经费投入占比达4%，研发技术位列国内前茅",
      imgUrl: "https://demoall.yiyocms.com/10979/template/default/pc/skin/images/ys1.png"
    }, {
      name: "制造优势",
      description: "拥有高柔性的制造加工能力， 拥有50 余台机械加工设备，具备下料、成型、 机加、焊接、涂装、安装调试等能力。",
      imgUrl: "https://demoall.yiyocms.com/10979/template/default/pc/skin/images/ys2.png"
    }, {
      name: "服务优势",
      description: "公司提供覆盖咨询、设备选型、图纸设计、 设备制造与安装、设备维护全过程专业服务， 360 度贴心到家。",
      imgUrl: "https://demoall.yiyocms.com/10979/template/default/pc/skin/images/ys3.png"
    },],
    samples: [{
      name: "案例展示六",
      description: "目前国内外,RTO、RCO、CO在中、低浓度VOCs废气净化领域（如喷涂、喷涂、电子、光电、能源、汽车、摩托车、自行车、...",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141G20U04.jpg"
    }, {
      name: "案例展示三",
      description: "目前国内外,RTO、RCO、CO在中、低浓度VOCs废气净化领域（如喷涂、喷涂、电子、光电、能源、汽车、摩托车、自行车、...",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141G150A8.jpg"
    }, {
      name: "案例展示二",
      description: "目前国内外,RTO、RCO、CO在中、低浓度VOCs废气净化领域（如喷涂、喷涂、电子、光电、能源、汽车、摩托车、自行车、...",
      imgUrl: "https://demoall.yiyocms.com/10979/uploads/allimg/20200914/1-2009141G133b1.jpg"
    },],

  }),
  methods: {
    changeImg() {
      if (this.currentImgIndx < this.imgs.length - 1)
        this.currentImgIndx += 1
      else
        this.currentImgIndx = 0
    },
  },
  components: {HomeSubtitle}
}
</script>
