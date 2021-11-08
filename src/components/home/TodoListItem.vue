<template>
  <v-card style="{margin: 0}">
      <v-container>
        <v-row>
            <v-card-title class="todo-title">
                <v-checkbox 
                    v-model="checkBox"
                    @change="togleCompleted"
                    :key="todo.id"
                    value
                ></v-checkbox> 
                <span 
                    :class="status">
                    {{todo.title}}
                </span>
            </v-card-title>
        </v-row>
      </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'TodoListItem',
    props: {
        todo: Object,
        index: Number
    },
    data: () => ({
        checkBox: false
    }),
    computed:{
        ...mapState(['todos']),
        status() {
            return (this.checkBox)? 'completed' : '';
        }

    },
    methods: {
        ...mapActions(['setTodoStatus']),
        togleCompleted() {
            this.setTodoStatus({id: this.todo.id})
        }
    },

    mounted() {
        this.checkBox = this.todo.completed
    },
    beforeUpdate() {
        this.checkBox = this.todo.completed
    }
}
</script>

<style scoped>
    .todo-title{
        font-size: 1.2rem;
        padding: 0 0 0 10px;
    }
    .completed{
        text-decoration: line-through;
    }

</style>