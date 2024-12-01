import type { Component, ComponentProps } from 'svelte';
import CodeBracketDeco from '../routes/deco/CodeBracketDeco.svelte';
import ArcV1Logo from '../routes/deco/ArcV1Logo.svelte';
import ArcV2Logo from '../routes/deco/arcV2Logo.svelte';

interface IProject {
	name: string;
	description: string;
	logo: Component;
	logoProps: ComponentProps<any>;
	longDescription?: string;
	sourceCode: null | string;
	startDate: string;
	endDate: null | string;
	labels: string[];
	documentationLink: null | string;
	techStack: {
		type: string;
		description: string;
		tech: { logoUrl: string | null; name: string; url: string | null }[];
	}[];
	liveDeployment: null | string;
}

function getProjects(): IProject[] {
	return [
		{
			name: 'Arc V1',
			description: `I built the first version of Arc trying to get visibility into how I'm spending all of my time. It soon grew to something much more capable with features like day planning, a personal diary, and in-depth stats about all the data collected over time. To protect the data, everything is E2E encrypted by using the Subtle Crypto API.`,
			logo: ArcV1Logo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			labels: [
				'Svelte',
				'Cryptography',
				'MySQL',
				'Disfy',
				'Firebase RTDB',
				'Key Based Auth',
				'Serverless Rest API',
				'& more'
			],
			sourceCode: 'https://github.com/undefined1raven/arc',
			documentationLink: 'x',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: 'https://ankaryn.online'
		},
		{
			name: 'Arc V2',
			description: `After using the first version of Arc everyday for around 7 months, I realized the potential of a native application that would adhere to the same principles as the first version. The entire UI and UX is redesigned for an even better experience. Significant architectural changes have also been made to improve performance.`,
			logo: ArcV2Logo,
			logoProps: { classNames: 'w-12 h-12 rounded-full' },
			startDate: '2021-01-01',
			endDate: null,
			labels: [
				'React Native',
				'TypeScript',
				'Disfy',
				'SQLite',
				'Serverless API',
				'Expo',
				'Firebase RTDB',
				'Cryptography'
			],
			sourceCode: 'https://github.com/undefined1raven/arc_v2',
			documentationLink: 'x',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Eagle',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: [
				'Svelte',
				'Javascript',
				'MQTT',
				'Firebase RTDB',
				'PCB Design',
				'C++',
				'Hardware integration'
			],
			sourceCode: '',
			documentationLink: 'x',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Eagle',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['React', 'TypeScript'],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Gallek',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['React', 'TypeScript'],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Ring Relay',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['React', 'TypeScript'],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Dronebuzz',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['React', 'TypeScript'],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		},
		{
			name: 'Spider Eyes',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classNames: 'w-12 h-12' },
			startDate: '2021-01-01',
			endDate: null,
			labels: ['React', 'TypeScript'],
			sourceCode: '',
			documentationLink: '',
			techStack: [
				{
					type: 'Frontend',
					description: 'Frontend',
					tech: [
						{ logoUrl: null, name: 'React', url: 'https://reactjs.org/' },
						{ logoUrl: null, name: 'TypeScript', url: 'https://www.typescriptlang.org/' }
					]
				}
			],
			liveDeployment: ''
		}
	];
}

export { getProjects };
export type { IProject };
