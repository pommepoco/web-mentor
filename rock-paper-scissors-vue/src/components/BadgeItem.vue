<template>
	<button class="badge-item" >
		<span :class="item.name" >
			<span class="bottom-shadow"></span>
			<span class="image">
			<span class="top-shadow"></span>
			</span>
		</span>
	</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Item } from '@/use/game';

export default defineComponent({
	name: 'BadgeItem',
	props: {
		item: Object as PropType<Item>
	}
});
</script>

<style scoped lang="scss">
@import "@/scss/_badge-config";
@use "sass:map";

.badge-item {
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	overflow: hidden;
	border-radius: 100%;
	@each $itemName, $properties in $badgeItems {
		.#{$itemName} {
			background:	map-get($properties, "background");
			.image {
				background-image: url("/items/icon-#{$itemName}.svg");
			}
		}
	}
	span {
		display: block;
	}
	> span {
		position: relative;
		height: 100%;
		width: 100%;
		border-radius: 100%;
		//box-shadow: inset 0px -5px 0px rgba(0, 0, 0, 0.2);
	}
}

.image {
	position: absolute;
	top: 15%;
	left: 15%;
	right: 15%;
	bottom: 15%;
	border-radius: 100%;
	background-color: white;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 50% auto;
	overflow: hidden;
	// box-shadow: inset 0px 0.7vw 0px rgba(0, 0, 0, 0.2);
}

.bottom-shadow, .top-shadow {
	position: absolute;
	right: 0;
	left: 0;
}
.bottom-shadow {
	top: -10%;
	bottom: -4%;
	background: radial-gradient(
		55% 45%,
		rgba(0,0,0,0) -100%,
		rgba(0,0,0,0) 95%,
		rgba(0,0,0,0.2) 95%,
		rgba(0,0,0,0.2) 100%
	);
}
.top-shadow {
	top: -3%;
	bottom: -10%;
	background: radial-gradient(
		55% 45%,
		rgba(0,0,0,0) -100%,
		rgba(0,0,0,0) 95%,
		rgba(0,0,0,0.2) 95%,
		rgba(0,0,0,0.2) 100%
	);
	border-radius: 100%;

}
</style>
