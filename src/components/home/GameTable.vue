<template>
	<div class="flex justify-center pt-8">
		<div class="w-fit border border-black">
			<div v-for="n in 3" class="flex justify-center">
				<table v-for="a in 3" class="border-black border">
					<tr v-for="i in 3" class="border">
						<td
							v-for="j in 3"
							class="w-20 h-20 border text-center border-black outline-none"
							:class="{
								'bg-[#eaeef4] a': clickedX == j && clickedTable == a,
								'bg-[#eaeef4] b': clickedY == i && clickedRow == n,
								'bg-[#eaeef4] c': clickedTable == a && clickedRow == n,
								'bg-blue-800/40 d':
									clickedTable == a && clickedRow == n && clickedX == j && clickedY == i,
								'bg-blue-800/40 e':
									arrayGame[clickedRow - 1][clickedTable - 1][clickedY - 1][clickedX - 1] ==
										arrayGame[n - 1][a - 1][i - 1][j - 1] &&
									arrayGame[n - 1][a - 1][i - 1][j - 1] != '',
							}"
							@click="cellClick(j, i, a, n)"
							tabindex="0"
							@keydown="handleKeydownOnCell">
							{{ arrayGame[n - 1][a - 1][i - 1][j - 1] }}
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
const arrayGame = ref([
	[
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
	],
	[
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
	],
	[
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
		[
			["", "", ""],
			["", "", ""],
			["", "", ""],
		],
	],
]);

function handleKeydownOnCell(event) {
	const validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	if (validKeys.includes(event.key)) {
		arrayGame.value[clickedRow.value - 1][clickedTable.value - 1][clickedY.value - 1][clickedX.value - 1] =
			event.key;
	} else if (event.key == "Backspace") {
		arrayGame.value[clickedRow.value - 1][clickedTable.value - 1][clickedY.value - 1][clickedX.value - 1] = "";
	}
}

const clickedX = ref(1);
const clickedY = ref(1);
const clickedTable = ref(1);
const clickedRow = ref(1);

function cellClick(x, y, table, row) {
	clickedX.value = x;
	clickedY.value = y;
	clickedTable.value = table;
	clickedRow.value = row;
}

function te(e) {
	console.log(e);
}
</script>

<style scoped>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.remove-arrow {
	-moz-appearance: textfield;
}
</style>
