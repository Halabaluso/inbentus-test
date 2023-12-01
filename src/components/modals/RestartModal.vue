<template >
<dialog id="restart_modal" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-error"><i class="fa-solid fa-circle-exclamation"></i> ¿Are you sure?</h3>
    <p class="py-4">Do you want to reset the data?</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button @click = "restartWindows" class="btn btn-error mr-2">I am sure</button>
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RestartSure",
  methods:{
    restartWindows(){
        window.location.href = "/"
    }
  }
});
</script>
<style lang="">
    
</style>