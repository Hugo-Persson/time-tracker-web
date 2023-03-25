export interface ProjectData {
	id: number;
	name: string;
	records: Array<TimeRecord>;
}

interface TimeRecord {
	start: Date;
	end: Date | undefined;
}

const projectData: Map<number, ProjectData> = new Map([
	[1, { id: 1, name: 'Recruto', records: [] }],
	[2, { id: 2, name: 'Gym', records: [] }],
	[
		3,
		{ id: 3, name: 'Evercode', records: [{ start: new Date('2023-03-25 15:30'), end: undefined }] }
	]
]);

export function getProjects(): Array<ProjectData> {
	return Array.from(projectData.values());
}

function formatTime(seconds: number) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds - hours * 3600) / 60);
	const remainingSeconds = seconds - hours * 3600 - minutes * 60;
	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function getTimeToday(project: ProjectData) {
	let totalSeconds = 0;
	project.records.forEach(
		(e) => (totalSeconds += (e.end || new Date()).getTime() - e.start.getTime())
	);
	totalSeconds /= 1000;
	totalSeconds = Math.floor(totalSeconds);

	return formatTime(totalSeconds);
}
