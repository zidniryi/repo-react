import React from 'react'
import { Helmet } from "react-helmet";

export default function TitleApp({ titleApp }) {
    return (
        <Helmet>
          <meta charSet="utf-8" />
            <title>{titleApp}</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    )
}

