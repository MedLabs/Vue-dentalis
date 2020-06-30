<template>
  <a-col>
    <router-link to="/">
      <a-col class="menu-item">
        <a-space>
          <a-icon style="font-size:18px" type="home"/>
          <br>Accueil
        </a-space>
      </a-col>
    </router-link>
    <router-link to="/staff">
      <a-col class="menu-item">
        <a-space direction="vertical">
          <a-icon style="font-size:18px" type="user"/>
          <br>Staff
        </a-space>
      </a-col>
    </router-link>
    <router-link to="/patients">
      <a-col class="menu-item">
        <a-space>
          <a-icon style="font-size:18px" type="idcard"/>
          <br>Patients
        </a-space>
      </a-col>
    </router-link>
    <router-link to="/rendez-vous">
      <a-col class="menu-item">
        <a-space direction="vertical">
          <a-icon style="font-size:18px" type="calendar"/>
          <br>Rendez-vous
        </a-space>
      </a-col>
    </router-link>
    <a-col class="menu-item">Orthodontie</a-col>
    <a-col class="menu-item">Prescriptions</a-col>
  </a-col>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
.menu-item {
  background: linear-gradient(
    rgba(255, 255, 255, 1) 0%,
    rgba(248, 248, 248, 1) 80%,
    rgba(235, 235, 235, 1) 100%
  );
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90px;
  min-height: 75px;
  color: #000;
}

.menu-item:hover {
  background: rgb(134, 134, 134);
  color: #fff;
}
</style>

