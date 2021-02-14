<template>
	<Game class="game" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Game from '@/components/Game.vue'

export default defineComponent({
  name: 'App',
  components: {
		Game
  }
});
</script>

<style lang=scss>
body {
	background: radial-gradient(ellipse at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	background-attachment: fixed;
	height: 100vh;
	font-family: "Barlow Semi Condensed";
}
</style>
