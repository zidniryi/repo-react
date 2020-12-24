import React from 'react'
import { Helmet } from 'react-helmet'

export default function TitleApp({ titleApp }) {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{titleApp}</title>
			<link rel="canonical" href="http://mysite.com/example" />
			{/* <script
				src="https://code.jquery.com/jquery-1.11.1.min.js"
				type="text/javascript"
			/> */}
			{/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" /> */}
			{/* <script src="../js/scroll.js" /> */}
			{/* <script src="../js/all.js" /> */}
		</Helmet>
	)
}
