import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import Word3D from './Word3D';

const styles = {
	default: {
		fontFamily: 'sans-serif',
		fontSize: 30,
		fontStyle: 'italic',
		padding: 4,
	},
	large: {
		fontSize: 60,
		fontWeight: 'bold',
	},
	small: {
		fontSize: 16,
	},
};

const words = {
	large: [
		'react-native',
		'JavaScript',
		'react-native-shared-element',
		'Vicky Parking',
		'Arion Run',
		'Firestorter',
	],
	normal: [
		'react-native-magic-move',
		'react-native-bundle-visualizer',
		'React.js',
		'iOS',
		'Android',
		'Objective-C',
		'Animations',
		'Java',
		'Github',
		'Native',
		'Full stack',
		'Creative',
		'Architect',
		'Bitbucket',
		'Firebase',
		'Circle-CI',
		'autolayout.js',
		'node-web-bluetooth',
		'react-tag-cloud',
		'Node.js',
		'Web Bluetooth',
		'famous',
		'HTML',
		'CSS',
		'ES6',
		'Async/await',
		'eslint',
		'Flow-Xpert',
		'FlowX',
		'UX',
		'Mocha',
		'Jest',
		'C++',
		'SQL',
		'YAML',
		'XCode',
		'Rouwcollectie',
		'Git',
		'TDD',
		'TypeScript',
	],
	small: ['Cordova', 'MFC', '.NET', 'VBA', 'Win-CE', 'Nijmegen'],
};

class WordCloud extends Component {
	componentDidMount() {
		setInterval(() => {
			this.forceUpdate();
		}, 20000);
	}

	renderWords() {
		const result = [];
		for (const key in words) {
			const style = styles[key];
			words[key].forEach(word => {
				result.push(
					<Word3D
						key={word}
						style={style}
						showDelay={2000 + result.length * 100}
					>
						{word}
					</Word3D>
				);
			});
		}
		return result;
	}

	render() {
		return (
			<TagCloud className="cloud" style={styles.default}>
				{this.renderWords()}
			</TagCloud>
		);
	}
}

export default WordCloud;
