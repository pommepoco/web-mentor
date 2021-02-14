<template>
	<div class="game">
		<GameHeader :score="game.score" class="header"/>
		<GameBoard :items="game.items"  class="game-board" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameHeader from '@/components/GameHeader.vue';
import GameBoard from '@/components/GameBoard.vue';
import useGame from '@/use/game.ts';

export default defineComponent({
	name: 'Game',
	components: {
		GameBoard,
		GameHeader
	},
	setup() {
		const game = useGame();
		return {
			game
		}
	}
});
</script>

<style scoped lang="scss" >
.game {
	display: flex;
	justify-content: center;
	flex-flow: column wrap;
	align-items: center;
}
.header {
	margin-top: 3rem;
	width: 100%;
	max-width: $desktop; 
}
.game-board {
	margin: 3rem 0;
	width: 100%;
	max-width: 60em; 
	position: relative;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
}
</style>
