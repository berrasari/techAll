import React from 'react'

function ContentWrapper({children}) {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    )
}

export default ContentWrapper