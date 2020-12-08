import React from 'react'

export default function IconText({ logo, textLogo }) {
	return (
		<div class="d-flex align-items-md-center">
			<img src={logo} alt="" width="20px" height="20px" />{' '}
			<b style={{ marginLeft: 10 }}>{textLogo}</b>
		</div>
	)
}
