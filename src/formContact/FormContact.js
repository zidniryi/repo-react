import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const FormContact = () => {
	return (
		<Fragment>
			<NavBar />
			<div
				className="row justify-content-md-center"
				style={{ marginTop: '7%', alignItems: 'center' }}
			>
				{/* <iframe
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
				></iframe> */}

				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSeTdZiwwyLGug1ZMu8CGMDMdQOzt-r36F_A5s74e9wA3MnfBA/viewform?embedded=true"
					width="640"
					height="2161"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					style={{ alignSelf: 'center' }}
				>
					Loading…
				</iframe>
			</div>
		</Fragment>
	)
}

export default FormContact
