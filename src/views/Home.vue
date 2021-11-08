<template>
  <div>
    <v-row>
      <v-col
        cols="2"
        :style="{paddingBottom: 0}"
      >
        <SideBar class="cover" />
      </v-col>
      <v-col
        cols="10"
        :style="{paddingBottom: 0}"
      >
        <TodoList class="cover overflow-auto" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import SideBar from '../components/home/SideBar.vue';
  import TodoList from '../components/home/TodoList.vue';


  export default {
    name: 'Home',

    components: {
      SideBar,
      TodoList
    },
  }
</script>

<style scoped>
  .cover{
    height: 100vh;
  }
</style>
