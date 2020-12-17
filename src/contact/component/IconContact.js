import React from 'react'

export const IconContact = ({ name, iconName }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
			<br />
			<p
				style={{
					backgroundColor: 'grey',
					width: 40,
					height: 40,
					borderRadius: 10,
				}}
			>
				<i
					className={iconName}
					aria-hidden="true"
					style={{
						// width: 20,
						marginLeft: 12,
					}}
				>
					{' '}
				</i>
			</p>
			<b style={{ marginLeft: 10, marginTop: '10px', fontSize: 14 }}>{name}</b>
		</div>
	)
}
