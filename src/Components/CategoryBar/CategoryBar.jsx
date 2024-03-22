import React from 'react'

const CategoryBar = ({Imgsrc,CategoryName}) => {
  return (
    <div>
      <div>
        <img src={Imgsrc} alt="CategoryImg" />

      </div>
      <p>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar
