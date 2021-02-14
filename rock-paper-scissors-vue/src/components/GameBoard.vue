<template>
	<div class="game-board">
		<BadgeItem v-for="item in items" :key="item.mame" :item="item" :class="item.name" class="badge-item" />
	</div>
</template>

<script lang="ts" >
import { defineComponent, PropType } from 'vue';
import BadgeItem from '@/components/BadgeItem.vue';
import { Item } from '@/use/game.ts';

export default defineComponent({
	name: "GameBoard",
	components: {
		BadgeItem
	},
	props: {
		items: {
			type: Array as PropType<Array<Item>>,
			required: true
		}	
	}	
});
</script>

<style lang="scss" scoped>
@import "@/scss/_badge-config";
@use "sass:map";

.game-board {
	background-image: url("/images/bg-pentagon.svg");
	background-repeat: no-repeat;
	background-size: 80% 76%;
	background-position: center center;
	position: relative;
}

.badge-item {
	position: absolute;
	width: $radius;
	height: $radius;
}

$directions: (top, left, right, bottom);

@each $itemName, $properties in $badgeItems {
	.#{$itemName} {
		@each $direction in $directions {
			@if map-get($properties, $direction) {
				#{$direction}: map-get($properties, $direction)
			}
		}
	}
}

</style>
