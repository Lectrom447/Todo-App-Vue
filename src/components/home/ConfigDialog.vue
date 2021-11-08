<template>
  <v-dialog
      v-model="active"
      width="500"
      persistent
  >
    <v-card>
        <v-card-title>
            <h2>Configuracion</h2>
        </v-card-title>
        <v-card-text class="mt-3">
            <v-row class="d-flex justify-space-between">
                <span
                    class="my-auto text-md-body-1"
                >Tema Oscuro</span>
                <div>
                    <v-switch
                    class="my-auto py-auto"  
                    hide-details
                    dense
                    inset
                    v-model="$vuetify.theme.dark"
                    />
                </div>

                
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            text
            color="error"
            @click="handleClose"
            >
                Cerrar
            </v-btn>

        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'ConfigDialog',
    props:{
        active: Boolean
    },
    methods:{
        handleClose() {
            this.$emit('close');
        }
    }

}
</script>

<style>

</style>