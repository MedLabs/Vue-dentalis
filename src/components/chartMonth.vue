<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip/>
      <v-axis/>
      <v-legend/>
      <v-stack-bar position="visites*jour" color="name"/>
    </v-chart>
  </div>
</template>

<script>
import DataSet from "@antv/data-set";

const sourceData = [
  {
    name: "Payé",
    "01 Fev'20": 3,
    "02 Fev'20": 6,
    "03 Fev'20": 4,
    "04 Fev'20": 5,
    "05 Fev'20": 3,
    "06 Fev'20": 7,
    "07 Fev'20": 2,
    "08 Fev'20": 5,
    "09 Fev'20": 4,
    "10 Fev'20": 7,
    "11 Fev'20": 3,
    "12 Fev'20": 5,
    "13 Fev'20": 6,
    "14 Fev'20": 3,
    "15 Fev'20": 5,
    "16 Fev'20": 3,
    "17 Fev'20": 4,
    "18 Fev'20": 6,
    "19 Fev'20": 8,
    "20 Fev'20": 4,
    "21 Fev'20": 6,
    "22 Fev'20": 4,
    "23 Fev'20": 5,
    "24 Fev'20": 2,
    "25 Fev'20": 4,
    "26 Fev'20": 6,
    "27 Fev'20": 1,
    "28 Fev'20": 5,
    "29 Fev'20": 2
  },
  {
    name: "Absent",
    "01 Fev'20": 1,
    "03 Fev'20": 1,
    "06 Fev'20": 2,
    "10 Fev'20": 1
  },
  {
    name: "Impayé",
    "10 Fev'20": 1,
    "08 Fev'20": 1,
    "16 Fev'20": 2,
    "13 Fev'20": 1
  }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "fold",
  fields: [
    "01 Fev'20",
    "02 Fev'20",
    "03 Fev'20",
    "04 Fev'20",
    "05 Fev'20",
    "06 Fev'20",
    "07 Fev'20",
    "08 Fev'20",
    "09 Fev'20",
    "10 Fev'20",
    "11 Fev'20",
    "12 Fev'20",
    "13 Fev'20",
    "14 Fev'20",
    "15 Fev'20",
    "16 Fev'20",
    "17 Fev'20",
    "18 Fev'20",
    "19 Fev'20",
    "20 Fev'20",
    "21 Fev'20",
    "22 Fev'20",
    "23 Fev'20",
    "24 Fev'20",
    "25 Fev'20",
    "26 Fev'20",
    "27 Fev'20",
    "28 Fev'20",
    "29 Fev'20"
  ],
  key: "visites",
  value: "jour"
});
const data = dv.rows;

export default {
  data() {
    return {
      data,
      height: 400
    };
  }
};
</script>