<script setup>
import {ref, watch} from 'vue'
async function fetchData() {
  let result = await fetch("http://api.anidb.net:9001/httpapi?request=randomrecommendation")
  console.log(result)
}


</script>

<template>
  <h1></h1>
<nav>
 
</nav>
<router-view />
<button @click="fetchData()">Fetch Button</button>
<v-card>
    <v-layout>
      <v-navigation-drawer
        rail
        permanent
        color="purple"
        expand-on-hover
      >
        <v-list-item
          prepend-avatar=""
          title="Anime Scaling"
          nav
        >
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" ><router-link to="/">Home</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account"  ><router-link to="/about">About</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline"  ><router-link to="/Debate">Start Debating</router-link></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 0px"></v-main>
    </v-layout>
  </v-card>

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
      color="Primary"
      dark
      @click="chip = true"
    >
      Reset Chip
    </v-btn>
  </div>
  <input type="checkbox" id="navcheck" role="button" title="menu">
<label for="navcheck" aria-hidden="true" title="menu">
	<span class="burger">
		<span class="bar">
			<span class="visuallyhidden"></span>
		</span>
	</span>
</label>
<button @click="fetch">fetch</button>

</template>

<style>
body {
  font-weight: bold;
    font-size: large;
color: #000000;
background-color: #A02BAA;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(177,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23A02BAA'/%3E%3Cstop offset='1' stop-color='%23000BFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(360,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(79,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg %3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
}




</style>
