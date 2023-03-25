<script lang="ts">
	import { getTimeToday, type ProjectData } from '../model/projects';

	export let project: ProjectData;

	let formattedTime = getTimeToday(project);

	let isRunning =
		project.records.length && project.records[project.records.length - 1].end === undefined;

	setInterval(() => {
		if (isRunning) formattedTime = getTimeToday(project);
	}, 1000);

	function toggleStatus() {
		if (isRunning) {
		}
	}
</script>

<div
	class="max-w-sm rounded overflow-hidden shadow-lg bg-purple-300 min-w-[20rem] min-h-[10rem] cursor-pointer"
	on:click={toggleStatus}
>
	<div class="px-6 py-4 flex flex-col">
		<div class="font-bold text-xl mb-2 text-center">{project.name}</div>
		<div class="text-gray-700 text-xl flex justify-center">
			{formattedTime}
		</div>
	</div>
	<!-- <div class="px-6 pt-4 pb-2">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>#photography</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>#travel</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>#winter</span
		>
	</div> -->
</div>
