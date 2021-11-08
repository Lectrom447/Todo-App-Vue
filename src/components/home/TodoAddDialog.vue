<template>
    <v-dialog
      v-model="AddDialog"
      width="700"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Nuevo Todo</span>
        </v-card-title>

        <v-card-text>
            <v-for>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                label="Nombre"
                                outlined
                                v-model.trim="newTodo.name"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-for>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="setTodoDialog({value:false})"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleSubmit"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'TodoAddDialog',
    data: () => ({
        newTodo: {
            name: ''
        }
    }),
    methods:{
        ...mapActions(['setTodoDialog', 'addTodo']),
        handleSubmit(){
            this.addTodo({...this.newTodo, groupId: this.ActiveTodoGroup.id});
            this.resetData();
            this.setTodoDialog({value: false});
        },
        resetData() {
            this.newTodo = {
                name: ''
            }
        }
    },
    computed:{
        ...mapState(['AddDialog', 'ActiveTodoGroup'])
    }

}
</script>
