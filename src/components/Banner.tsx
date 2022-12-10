import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from './Image';

interface Link {
  link: string,
  btnText: string
}

interface Props {
  link?: Link
}

const Banner = ({ link }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='container' style={{ margin: "auto", paddingInline: "5vw"}}>
        <div className='d-flex justify-content-center align-items-center row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1 className='mb-2 fw-bold'>{t('homepage.name')}</h1>
            <p
              className='mb-2 text-wrap'
              style={{ width: "25rem" }}
            >
              {t('homepage.aboutme')}
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
