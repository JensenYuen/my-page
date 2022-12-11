import react from 'react'

interface props {
  title: string;
  img: string;
  description: string;
}

const GridItem = ({ title, img, description }: props) => {
  return(
    <div className="col text-center">
      <img
        className="bi text-muted flex-shrink-0 align-self-center"
        style={{ width: '4em', height: '4em'}}
        src={img}
        alt={img} />
      <h3 className="fw-bold mb-0 fs-4 text-capitalize">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default GridItem;
