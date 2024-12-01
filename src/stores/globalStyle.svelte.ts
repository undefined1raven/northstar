import { writable } from 'svelte/store';

const globalStyle = writable({
	color: '#261A6F',
	textColor: '#2A2161',
	accentColor: '#5343B6',
	accentTextColor: '#53489B',
	inactiveColor: '#9D8DFF',
	inactiveTextColor: '#624FD9',
	pageColor1: '#B7B2FA',
	pageColor2: '#9F99F4',
	pageColor3: '#A5A2D9'
});



export { globalStyle };
