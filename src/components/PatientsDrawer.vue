<template>
  <a-drawer title="title" :closable="true" :visible="visible" @close="closeFn" width="500">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
export default {
  name: "PatientsDrawer",
  props: ["visible", "closeFn"],
  data() {
    return {};
  }
};
</script>
