<template>
  <a-layout>
    <a-layout-header class="header">
      <Header/>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="90" class="sider">
        <Menu/>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="content">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Menu from "./components/partials/Menu";
import Header from "./components/partials/Header";
import Patients from "./sections/Patients.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Menu,
    Header,
    Patients
  }
};
</script>

<style>
body {
  background: #e6e8eb;
}

.header {
  background-color: #FFF;
  padding: 0;
  width: 100%;
  z-index: 1;
  overflow: auto;
  position: fixed;
  box-shadow: 0px 3px 5px #cfcfcf;
}
.sider {
  overflow: auto;
  position: fixed;
  margin: 90px 25px;
  box-shadow: 0px 3px 10px #cfcfcf;
}
.content {
  height: 100%;
  margin: 90px 20px 20px 140px;
}
</style>
