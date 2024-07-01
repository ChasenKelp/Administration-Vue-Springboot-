<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default  {
  name:  'App',
    metaInfo() {
        return {
            title: 人事管理系统,
            titleTemplate: 人事管理系统
        }
    }
}
</script>
