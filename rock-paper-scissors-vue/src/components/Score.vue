<template>
	<div>
		<span class="title">Score</span>
		<span class="score">{{score}}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'score',
	props: {
		score: {
			type: Number,
			required: true
		}
	}
});
</script>

<style lang="scss" scoped>
div {
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	background-color: white;
	padding: 1rem 3rem;
	border-radius: 1rem;
	text-align: center;
}
.title {
	display: block;
	font-size: 1.7rem;
	color: $dark_text;
}
.score {
	color: $dark_text;
	display: block;
	font-size: 3.5rem;
	font-weight: bold;
}
</style>
