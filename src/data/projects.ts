import type { Component, ComponentProps } from 'svelte';
import CodeBracketDeco from '../routes/deco/CodeBracketDeco.svelte';

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
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
			name: 'Arc V2',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
			name: 'Arc V1',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
			name: 'Arc V2',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
			name: 'Arc V1',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
			name: 'Arc V2',
			description: 'Description 1',
			logo: CodeBracketDeco,
			logoProps: { classname: 'w-12 h-12' },
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
