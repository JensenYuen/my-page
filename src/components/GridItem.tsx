import react from 'react'

interface props {
  title: string;
  img: string;
  description: string;
}

const GridItem = ({ title, img, description }: props) => {
  return(
    <div className="col d-flex align-items-start">
      <div>
        <img
          className="bi text-muted flex-shrink-0 me-3"
          style={{ width: '4em', height: '4em'}}
          src={img}
          alt={img} />
        <h3 className="fw-bold mb-0 fs-4 text-capitalize">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GridItem;
