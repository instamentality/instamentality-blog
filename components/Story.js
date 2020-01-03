import React from 'react'

export default function Story({ headline, htmlContent }) {
    return (
        <>
            <h1>{headline}</h1>
            <article>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>
        </>
    )
}