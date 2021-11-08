<template>
  <v-card class="d-flex justify-space-between flex-column">
    <ConfigDialog :active="configOpen" @close="handleConfig"/>
    <v-list>
      <v-subheader>Grupos de Tareas</v-subheader>
      <v-list-item-group
        v-model="activeTodoGroup"
        @change="changeActiveGroup"
        mandatory
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in TodoLists"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div>
      <v-divider></v-divider>
      <div class="d-flex justify-end">
        <v-btn
          class="ma-2"
          text
          disabled
          icon
        >
          <v-badge
            content="2"
            bordered
            overlap
            :value="false"
          >
            
            <v-icon>mdi-autorenew</v-icon>
          </v-badge>
        </v-btn>
        <v-btn
          class="ma-2"
          text
          icon
          @click="handleConfig"
        >
          <v-badge
            content="2"
            bordered
            overlap
            :value="false"
          >
            
            <v-icon>mdi-cog</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import ConfigDialog from './ConfigDialog.vue'
export default {
    name: 'SideBar',
    data() {
        return{
            activeTodoGroup: 0,
            configOpen: false
        }
    },
    components:{
      ConfigDialog
    },
    methods:{
        ...mapActions(['setTodoGroup']),
        changeActiveGroup() {
            this.setTodoGroup(this.activeTodoGroup);
        },
        handleConfig() {
          this.configOpen = !this.configOpen
        }
    },
    computed:{
        ...mapState(['TodoLists'])

    },
    created(){
        this.changeActiveGroup();
    }


}
</script>

<style>

</style>