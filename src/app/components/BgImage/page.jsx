import React from 'react'

const page = ({Component,pageProps}) => {
  return (
    <div style={{
        backgroundImage: `url("image4.jpg")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}>
        <Component {...pageProps} />
    </div>
  )
}

export default page