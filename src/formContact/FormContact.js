import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const FormContact = () => {
	return (
		<Fragment>
			<NavBar />
			<div className="container" style={{ marginTop: '7%' }}>
				<iframe
					allowTransparency="true"
					// style="min-height:300px; height:inherit; overflow:auto;"
					style={{ minHeight: '1000px', height: 'inherit', overflow: 'auto' }}
					width="100%"
					id="contactform123"
					name="contactform123"
					marginwidth="0"
					marginheight="0"
					frameborder="0"
					src="https://form.123formbuilder.com/my-contact-form-5765096.html"
				></iframe>
			</div>
		</Fragment>
	)
}

export default FormContact
