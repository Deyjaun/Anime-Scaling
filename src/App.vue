<script setup>
import {ref, watch} from 'vue'
</script>

<template>
  <h1>Welcome To Anime Scaling</h1>



<v-chip
  closable
>
  Chip
</v-chip>

<div class="text-center">
    <v-chip
      v-if="chip"
      class="ma-2"
      closable
      @click:close="chip = false"
    >
      Closable
    </v-chip>

    <v-btn
      v-if="!chip"
      close
      color="primary"
      dark
      @click="chip = true"
    >
      Reset Chip
    </v-btn>
  </div>
</template>

<style>
body {
  font-weight: bold;
    font-size: large;
color: #fefefe;
background-color: #03FF41;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%2352FFEA' stroke-width='100' stroke-opacity='0' %3E%3Ccircle fill='%2303FF41' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%236df500' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2398ea00' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23badd00' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23d7cf00' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23f1bf00' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23ffad00' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23ff9800' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23ff8100' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23ff6500' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23ff4131' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23ff0051' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23ff006e' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23ff008b' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23ff00a9' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23ff00c7' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23ff00e4' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23F500FF' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
}

</style>
