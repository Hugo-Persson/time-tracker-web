<script lang="ts">
	import Project from '../components/project.svelte';
	import { getProjects, type ProjectData } from '../model/projects';

	const projects: Array<ProjectData> = getProjects();
</script>

<main class="w-2/3 mx-auto">
	<h1 class="text-3xl font-bold underline">Your projects</h1>

	<div class="flex justify-between mx-auto my-4">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</main>
