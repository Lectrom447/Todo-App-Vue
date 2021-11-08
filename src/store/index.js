import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AddDialog: false,
    ActiveTodoGroup:{},
    TodoLists:[
      { id: '0', title: 'Mi dia', icon: 'mdi-clock' },
      { id: '1', title: 'Audience', icon: 'mdi-account' },
      { id: '2', title: 'Conversions', icon: 'mdi-flag' },
    ],
    todos: [
      {
        id: '0',
        title: 'Hacer Tarea',
        groupId: '1',
        completed: false
      },
      {
        id: '1',
        title: 'Hacer Tarea GG',
        groupId: '0',
        completed: false
      },
      {
        id: '2',
        title: 'Hacer JS',
        groupId: '0',
        completed: false
      },
      {
        id: '3',
        title: 'Hacer tlss',
        groupId: '2',
        completed: false
      },
      {
        id: '4',
        title: 'Ingles V',
        groupId: '2',
        completed: false
      },
      {
        id: '5',
        title: 'Comerr',
        groupId: '1',
        completed: false
      },
      {
        id: '6',
        title: 'Test',
        groupId: '1',
        completed: false
      },
      {
        id: '7',
        title: 'Mirar',
        groupId: '0',
        completed: false
      },
    ]
        
  },
  mutations: {
    setActiveGroup(state, index){
      state.ActiveTodoGroup = state.TodoLists[index];
    },
    setAddDialog(state, payload){
      state.AddDialog = payload.value;
      console.log(state.AddDialog);
    },
    addTodo(state, payload){
      state.todos.push(
        {
          id: Math.round(Math.random()*1000).toString(),
          title: payload.name,
          groupId: payload.groupId,
          completed: false
        }
      )
    },
    toggleCompletedStatus(state, payload) {
      state.todos.forEach((todo, index) => {
        if(todo.id === payload.id){
          state.todos[index].completed = !todo.completed;
        }
      });
    }
  },
  actions: {
    setTodoGroup({commit}, index){
      commit('setActiveGroup', index);
    },
    setTodoStatus({commit}, payload){
      commit('toggleCompletedStatus', payload);
    },
    setTodoDialog({commit}, payload){
      commit('setAddDialog', payload);
    },
    addTodo({commit}, payload){
      commit('addTodo', payload);
    }
  },
  modules: {
  }
})
