<template>
    
    <div id="todo-group">
        <TodoAddDialog />
        <div id="todo-group-title" class="d-flex justify-space-between pr-2">
            <h1>{{ActiveTodoGroup.title}}</h1>
            <v-btn 
                class="my-auto"
                color="primary"
                @click="setTodoDialog({value:true})"
            >
                <v-icon left>
                    mdi-plus
                </v-icon>
                Nuevo
            </v-btn>
        </div>
        <v-container>
            <TodoListItem   
                v-for="(item, index) in getTodos"
                :key="index"
                class="todoItem" 
                :todo="item" 
                :index="index"
            />

        </v-container>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TodoListItem from './TodoListItem.vue';
import TodoAddDialog from './TodoAddDialog.vue';


export default {
    name: 'TodoList',
    data: () => ({

    }),
    components: {
        TodoListItem,
        TodoAddDialog
    },
    methods: {
        ...mapActions(['setTodoDialog'])
    },
    computed:{
        ...mapState(['ActiveTodoGroup', 'todos']),
        getTodos() {
            return this.todos.filter(todo => todo.groupId === this.ActiveTodoGroup.id)
        }
    }

}
</script>

<style>
    .todoItem{
        margin-bottom: 10px;
    }
</style>