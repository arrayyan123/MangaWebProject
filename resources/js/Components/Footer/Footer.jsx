import IonIcon from '@reacticons/ionicons'
import React from 'react'
IonIcon

function Footer() {
  return (
    <>
      <div className=" relative -z-10">
        <div className="flex justify-between p-10 ">
          <div className="flex flex-col w-[300px]">
            <h1 className='text-[30px] font-bold underline'>Footer Testing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam consectetur cum sunt aperiam eius beatae itaque maxime. Esse beatae voluptatum fugit inventore repudiandae commodi libero laborum voluptatem reiciendis sit?</p>
          </div>
          <div className="flex flex-col">
            <h1>Menu</h1>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1>Social Media</h1>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer