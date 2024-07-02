<template>
  <div class="app-container home">
    <el-row>
      <el-col>
        <blockquote style="font-size: 14px">
          重庆大学软件学院网址
          <br/>
          <el-link
            href="http://www.cse.cqu.edu.cn/"
            type="primary"
            target="_blank"
            >http://www.cse.cqu.edu.cn/</el-link>
        </blockquote>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="12" style="padding-left: 20px">
        <h2>项目说明</h2>
        <p>
          该项目以人事管理系统为例，全面讲述了前后端全栈管理系统的开发要点，这样初学者能很快通过该项目上手Spring Boot和前端Vue技术。
          <br/>
          <br/>
          通过本项目高效上手前后端开发技术的建议方法是，第一在电脑上搭建环境，跑通该项目，第二按本项目配套图书的讲解，逐章学习前后端技术，第三要重视学习前后端交互技术，
          第四再学习开发项目所必须的衍生技能，比如redis，logback等。
        </p>
      </el-col>

      <el-col :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="10">
            <h2>本项目所包含的技术</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <h4>后端主要技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>IOC和AOP</li>
              <li>Mybatis</li>
              <li>Redis</li>
              <li>MyBatis</li>
              <li>JPA</li>
              <li>Swagger</li>
              <li>logback</li>
            </ul>
          </el-col>
          <el-col :span="10">
            <h4>前端主要技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Vue Route</li>
              <li>前端重要组件使用要点</li>
              <li>监听器</li>
              <li>基于Json的数据交互</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="12" style="padding-left: 50px">
        <h4>工作日历</h4>
        <ul>
          <el-calendar>
            <template #date-cell="{ data }">
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }}
                {{ data.isSelected ? '*' : '' }}
              </p>
            </template>
          </el-calendar>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Index",

  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.is-selected {
  color: #2976c2b8;
}
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  color: #675c6b;


}
</style>

