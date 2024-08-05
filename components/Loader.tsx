import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div>
        <Image src={"/icons/loading-circle.svg"} alt="loading-circle" width={50} height={50}/>
    </div>
  )
}

export default Loader