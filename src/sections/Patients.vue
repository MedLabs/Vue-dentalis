<template>
  <div>
    <a-row class="toolbar">
      <a-col span="8" style="background: #fff; height: 100%">
        <a-button type="link" icon="plus" style="color:#000">Ajouter nouveau</a-button>
      </a-col>
      <a-col span="8" push="8" style="text-align:right">
        <a-input-search placeholder="Chercher"></a-input-search>
      </a-col>
    </a-row>
    <br>
    <a-row>
      <a-col span="24">
        <a-table layout="auto" class="tableBg" :dataSource="data" :columns="columns">
          <template slot="name" slot-scope="name">
            <a-row>
              <a-avatar shape="circle" size="large" style="backgroundColor: green">{{name[0]}}</a-avatar>
              {{name}}
            </a-row>
            <a-row style="padding-top:10px">
              <a-col>
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span style="font-size:12px">Détails du Patient</span>
                  </template>
                  <a-button icon="idcard" @click="toggleDrawer"></a-button>
                </a-tooltip>
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span style="font-size:12px">Historique dentaire</span>
                  </template>
                  <a-button icon="medicine-box"></a-button>
                </a-tooltip>
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span style="font-size:12px">Photos et radios</span>
                  </template>
                  <a-button icon="file-image"></a-button>
                </a-tooltip>
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span style="font-size:12px">Rendez-vous</span>
                  </template>
                  <a-button icon="calendar"></a-button>
                </a-tooltip>
                <a-button icon="delete"></a-button>
              </a-col>
            </a-row>
          </template>
          <template slot="nextAct" slot-scope="record">
            <a-avatar
              shape="square"
              size="large"
              icon="step-forward"
              style="backgroundColor: orange"
            />
            {{record.nextAct}}
            <br>
            <a-avatar
              shape="square"
              size="large"
              icon="step-backward"
              style="backgroundColor: purple"
            />
            {{record.nextAct}}
          </template>
        </a-table>
      </a-col>
    </a-row>
    <PatientsDrawer :visible="visible" :closeFn="toggleDrawer"/>
  </div>
</template>

<script>
import PatientsDrawer from "../components/PatientsDrawer";
export default {
  name: "Patients",
  components: {
    PatientsDrawer
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
          dataIndex: "name",
          sorter: true,
          scopedSlots: { customRender: "name" }
        },
        {
          title: "Prochain Rendez-vous",
          key: "nextAct",
          indexData: "nextAct",
          scopedSlots: { customRender: "nextAct" }
        }
      ],
      data: [
        {
          id: "1",
          name: "Jane Doe",
          nextAct: "Enlevement de dent"
        },
        {
          id: "2",
          name: "John Doe",
          nextAct: "Blanchiment"
        },
        {
          id: "3",
          name: "Mike Smith",
          nextAct: "Diagnostic"
        },
        {
          id: "4",
          name: "Jane Doe",
          nextAct: "Enlevement de dent"
        },
        {
          id: "5",
          name: "John Doe",
          nextAct: "Blanchiment"
        },
        {
          id: "6",
          name: "Mike Smith",
          nextAct: "Diagnostic"
        }
      ],
      visible: false,
      editedItem: [
        {
          id: "",
          name: "",
          nextAct: ""
        }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style scoped>
.toolbar {
  background: #fff;
  box-shadow: 0px 2px 6px #cfcfcf;
  height: 40px;
  display: flex;
  align-items: center;
}
a-input-search {
  height: 40px;
  width: 200px;
  padding-left: 5px;
  border: none;
  border-left: 1px solid rgb(212, 212, 212);
}
.tableBg {
  background-color: #fff;
  box-shadow: 0px 2px 6px #cfcfcf;
}
</style>

