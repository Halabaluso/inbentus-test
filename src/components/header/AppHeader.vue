<template>
  <div class="header shadow">
    <div class="navbar bg-primary">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">
          <logo />
        </a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1"><i class="fa-solid fa-palette"></i></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><button @click="changeTheme(`corporate`)">Corporate</button></li>
            <li><button @click="changeTheme(`coffee`)">Coffee</button></li>
            <li><button @click="changeTheme(`emerald`)">Emerald</button></li>
            <li><button @click="changeTheme(`forest`)">Forest</button></li>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1"><i class="fa-solid fa-gear"></i></div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><button onclick="restart_modal.showModal()"><i class="fa-solid fa-arrow-rotate-right mr-2"></i> Restart data</button></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "./Logo.vue";

export default Vue.extend({
  name: "AppHeader",
  components: { Logo },
  methods:{
    changeTheme(theme:string){
      document.documentElement.setAttribute('data-theme', theme)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
