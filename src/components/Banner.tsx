import React from 'react';
import Image from './Image';

interface Link {
  link: string,
  btnText: string
}

interface Props {
  heading: string,
  subText: string,
  link?: Link
}

const Banner = ({ heading, subText, link }: Props) => {
  return (
    <>
      <div className='container' style={{ margin: "auto", paddingInline: "5vw"}}>
        <div className='d-flex justify-content-center align-items-center row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1 className='mb-2 fw-bold'>{heading}</h1>
            <p
              className='mb-2 text-wrap'
              style={{ width: "25rem" }}
            >
              {subText}
            </p>
            {link &&
              <a className='btn btn-outline-light btn-lg' href={link?.link} role='button'>
                {link?.btnText}
              </a>
            }
          </div>
          <Image className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'/>
        </div>
      </div>
    </>
  )

}

export default Banner;
