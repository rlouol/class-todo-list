import { Component } from 'react';
import styled from 'styled-components';

import { Button } from 'Component/Button';

const Container = styled.div`
	display: flex;
	border-bottom: ipx solid #BDBDBD;
	align-items: center;
	margin: 10px;
	padding: 10px;
`

const Label = styled.div`
	flex: 1;
	font-size: 16px;
	margin-right: 20px;
`

interface Props {
	readonly label: string;
	readonly onDelete?: () => void;
}

export class ToDoItem extends Component<Props> {
	render() {
		const { label, onDelete } = this.props
		return (
			<Container>
				<Label>{label}</Label>
				<Button
					label='삭제'
					backgroundColor='#FF1744'
					hoverColor='#F01440'
					onClick={onDelete} />
			</Container>
		)
	}
}