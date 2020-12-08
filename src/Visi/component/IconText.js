import React from 'react'

export default function IconText({ logo, textLogo }) {
	return (
		<div
			class="card"
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				width: '15rem',
				marginLeft: '20px',
			}}
		>
			<img
				class="card-img-top"
				src={logo}
				alt="Card image cap"
				style={{ width: 60, marginTop: 20 }}
			/>
			<div class="card-body">
				<h3 class="card-title">{textLogo}</h3>
			</div>
		</div>
	)
}
