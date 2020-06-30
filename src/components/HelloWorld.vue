<template>
  <a-layout-content>
    <a-row type="flex" justify="space-around">
      <a-col span="22">
        <chartMonth/>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col span="11" class="titleRV">Rendez-vous d'Aujourd'hui</a-col>
      <a-col span="11" class="titleRV">Rendez-vous de Demain</a-col>
    </a-row>
    <br>
    <a-row type="flex" justify="center" gutter="16">
      <a-col span="11">
        <a-table :columns="columns" :data-source="table1">
          <a-table-column>
            <span slot="acte" slot-scope="text">
              <a-avatar shape="square">{{text.acte[0]}}</a-avatar>
              {{text.acte}}
            </span>
          </a-table-column>
        </a-table>
      </a-col>
      <a-col span="11">
        <a-table :columns="columns" :data-source="table2"></a-table>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import chartMonth from "./chartMonth.vue";
export default {
  name: "HelloWorld",
  components: {
    chartMonth
  },
  data() {
    return {
      columns: [
        {
          title: "Patient",
          dataIndex: "patient",
          scopedSlots: { customRender: "patient" }
        },
        {
          title: "Docteur",
          dataIndex: "docteur",
          scopedSlots: { customRender: "docteur" }
        }
      ],
      table1: [
        {
          acte: "Diagnostic",
          patient: "Carla Bruni",
          doctor: "Dr House"
        },
        {
          acte: "Blanchiment",
          patient: "Moncef Marzouki",
          doctor: "Dr House"
        }
      ],
      table2: [
        {
          acte: "Enlèvement de dent",
          patient: "Maya Ksouri",
          docteur: "Dr House"
        }
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleRV {
  background: #fff;
  height: 36px;
}
</style>
