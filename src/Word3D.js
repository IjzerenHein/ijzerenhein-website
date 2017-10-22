import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Word3D extends Component {
	static propTypes = {
		style: PropTypes.any,
		depth: PropTypes.number,
		showDelay: PropTypes.number
	};

	static defaultProps = {
		depth: 0,
		showDelay: 0
	};

	constructor(props) {
		super(props);
		this.state = {
			depth: 0,
			visible: props.showDelay ? false : true
		};
	}

	getStyle() {
		const {style} = this.props;
		const {depth, visible} = this.state;
		return {
			textShadow: `rgb(30, 242, 241) ${depth * -5}px 0 1px, rgb(246, 5, 10) ${depth * 5}px 0 1px`,
			opacity: visible ? 1 : 0,
			transform: `${style.transform} scale(${(depth / 20) + 1})`
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				depth: (Math.random() * 2) - 1
			});
		}, 2000);
		if (this.props.showDelay) {
			this.delayTimer = setTimeout(() => {
				this.delayTimer = undefined;
				this.setState({
					visible: true
				});
			}, this.props.showDelay);
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		if (this.delayTimer) clearTimeout(this.delayTimer);
	}

	render() {
		const {style, children, ...props} = this.props;
		return (
			<div
				className='word3d'
				style={{
					...style,
					...this.getStyle()
				}}>
	           	{children}
	        </div>
		);
	}
}

export default Word3D;
