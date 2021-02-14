<template>
	<header>
		<img src="@/assets/logo-bonus.svg" alt="rock paper scissors lizard spock">
		<Score :score="score" />
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Score from '@/components/Score.vue';

export default defineComponent({
	name: 'GameHeader',
	components: {
		Score
	},
	props: {
		score: {
			type: Number,
			required: true
		}
	}
});
</script>
<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	border: solid 3px $header_outline;
	border-radius: 1rem;
}
img {
	height: 8rem;
}
</style>
