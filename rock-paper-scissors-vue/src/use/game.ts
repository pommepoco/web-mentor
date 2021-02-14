import {reactive} from 'vue';

interface Game {
	score: number;
	items: Item[]
}

export enum ItemNames {
	rock = 'rock',
	paper = 'paper',
	lizard = 'lizard',
	scissors = 'scissors',
	spock = 'spock'
}

export interface Item {
	name: string;
	beats: Item[];
	beatenBy: Item[]
}

export default (): Game => {
	return reactive<Game>({
		score: 0,
		items: [
			{
				name: ItemNames.rock,
				beats: [],
				beatenBy: []
			},
			{
				name: ItemNames.paper,
				beats: [],
				beatenBy: []
			},
			{
				name: ItemNames.scissors,
				beats: [],
				beatenBy: []
			},
			{
				name: ItemNames.lizard,
				beats: [],
				beatenBy: []
			},
			{
				name: ItemNames.spock,
				beats: [],
				beatenBy: []
			}
		]
	});
};
