<template>
  <div class="common-header">
    <h1>COMMON APP HEADER</h1>
    <a style="color: white" href="http://localhost:3001">APP_1</a> <br>
    <a style="color: white" href="http://localhost:3002">APP_2</a> <br>
    <a style="color: white" href="http://localhost:3003">APP_3</a> <br>
    <a style="color: white" href="http://localhost:3000">APP_COMMON</a> <br>
  </div>
</template>

<style scoped>
  .common-header{
    background-color: darkorange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .common-header h1 {
    margin-right: 50px;
  }

  .common-header a {
    margin-right: 10px;
  }
</style>
