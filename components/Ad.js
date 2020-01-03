import React from 'react'

export default function Ad({ htmlContent }) {
    return (
        <article>
            <p>This is an ad!</p>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
    )
}