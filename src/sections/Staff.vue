<template>
  <div>
    <a-row gutter="16">
      <a-col span="16">
        <a-row class="toolbar">
          <a-col span="8" style="background: #fff; height: 100%">
            <a-button type="link" icon="plus" style="color:#000">Ajouter nouveau</a-button>
          </a-col>
          <a-col span="8" push="8" style="text-align:right">
            <a-input-search placeholder="Chercher"></a-input-search>
          </a-col>
        </a-row>
        <br>
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
                  <a-button icon="key"></a-button>
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
          <template slot="contact" slot-scope="record">
            <a-avatar shape="square" size="large" icon="phone" style="backgroundColor: darkblue"/>
            {{record.contact.phone}}
            <br>
            <a-avatar shape="square" size="large" icon="mail" style="backgroundColor: darkblue"/>
            {{record.contact.email}}
          </template>
        </a-table>
      </a-col>
      <a-col span="8">
        <a-row :key="item.day" v-for="item in list" class="shift">
          <a-col span="6" class="dayCell">{{item.day}}</a-col>
          <a-col span="14" class="staffCell">
            <span>
              <a-avatar
                shape="circle"
                size="large"
                style="backgroundColor: green"
              >{{item.staff[0][0]}}</a-avatar>
              {{item.staff[0]}}
            </span>
            <br>
            <span>
              <a-avatar
                shape="circle"
                size="large"
                style="backgroundColor: green"
              >{{item.staff[1][0]}}</a-avatar>
              {{item.staff[1]}}
            </span>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Staff",
  components: {},
  data() {
    return {
      columns: [
        {
          title: "Docteur",
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
        },
        {
          title: "Détails de contact",
          key: "contact",
          indexData: "contact",
          scopedSlots: { customRender: "contact" }
        }
      ],
      data: [
        {
          id: "1",
          name: "Jane Doe",
          nextAct: "Enlevement de dent",
          contact: {
            phone: "65986532",
            email: "jane@google.com"
          }
        },
        {
          id: "2",
          name: "John Doe",
          nextAct: "Blanchiment",
          contact: {
            phone: "22556987",
            email: "jane@google.com"
          }
        },
        {
          id: "3",
          name: "Mike Smith",
          nextAct: "Diagnostic",
          contact: {
            phone: "65986532",
            email: "mike@gmail.com"
          }
        },
        {
          id: "4",
          name: "Jane Doe",
          nextAct: "Enlevement de dent",
          contact: {
            phone: "65986532",
            email: "jane@google.com"
          }
        }
      ],
      list: [
        {
          day: "Lundi",
          staff: ["Jane Doe", "Mike Smith"]
        },
        {
          day: "Mardi",
          staff: ["Jane Doe", "Mike Smith"]
        },
        {
          day: "Mercredi",
          staff: ["Jane Doe", "Mike Smith"]
        },
        {
          day: "Jeudi",
          staff: ["Jane Doe", "Mike Smith"]
        },
        {
          day: "Vendredi",
          staff: ["Jane Doe", "Mike Smith"]
        },
        {
          day: "Samedi",
          staff: ["Jane Doe", "Mike Smith"]
        }
      ]
    };
  },
  methods: {
    toggleDrawer() {}
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
.shift {
  background: #fff;
  box-shadow: 0px 2px 6px #cfcfcf;
}
.dayCell {
  background-color: #FAFAFA;
  height: 100px;
  min-width: 90px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0px;
}
.staffCell {
  background: #ffffff;
  padding: 10px;
  line-height: 40px;
}
</style>
