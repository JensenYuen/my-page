import react from 'react'
import Card from 'react-bootstrap/Card';

interface props {
  className?: string;
  title: string;
  text: string;
  link: string;
}

const CustomCard = ({ className, title, text, link }:props) => {

  return (
    <div className={`${className}`}
      style={{ color: "#9E7676" }}>
      <Card className='bg-dark'>
        <Card.Img src={link} alt="Card image" style={{ objectFit: "fill" }}/>
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default CustomCard;
