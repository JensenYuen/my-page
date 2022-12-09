import React from 'react';

interface Link {
  link: string,
  btnText: string
}

interface Props {
  heading: string,
  subHeading: string,
  link?: Link
}

const Banner = ({ heading, subHeading, link }: Props) => {

  return (
    <header style={{ marginTop: '55px' }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask rounded-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{heading}</h1>
              <h4 className='mb-3'>{subHeading}</h4>
              {link &&
                <a className='btn btn-outline-light btn-lg' href={link?.link} role='button'>
                  {link?.btnText}
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
