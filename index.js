const plugin = require('tailwindcss/plugin');

const spacingPlugin = plugin(({ addUtilities, theme }) => {
	Object.entries(theme('spacing')).forEach((element) => {
		const value = element[1].replace('rem', 'em');
		addUtilities({
			[`.m-${element[0]}`]: { margin: value },
			[`.mt-${element[0]}`]: { marginTop: value },
			[`.mb-${element[0]}`]: { marginBottom: value },
			[`.ml-${element[0]}`]: { marginLeft: value },
			[`.mr-${element[0]}`]: { marginRight: value },
			[`.mx-${element[0]}`]: { marginLeft: value, marginRight: value },
			[`.my-${element[0]}`]: { marginTop: value, marginBottom: value },
			[`.p-${element[0]}`]: { padding: value },
			[`.pt-${element[0]}`]: { paddingTop: value },
			[`.pb-${element[0]}`]: { paddingBottom: value },
			[`.pl-${element[0]}`]: { paddingLeft: value },
			[`.pr-${element[0]}`]: { paddingRight: value },
			[`.px-${element[0]}`]: { paddingLeft: value, paddingRight: value },
			[`.py-${element[0]}`]: { paddingTop: value, paddingBottom: value },
		});
	});
});

module.exports = spacingPlugin;
