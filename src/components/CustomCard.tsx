import react from 'react'
import Card from 'react-bootstrap/Card';

interface props {
  className?: string;
  title: string;
  text: string;
  info: string;
  link: string;
}

const CustomCard = ({ className, title, text, info, link }:props) => {

  return (
    <div className={`${className}`}>
      <Card className='bg-dark h-100 text-white'>
        <Card.Img src={link} variant="top" alt="Card image" style={{ objectFit: "fill" }}/>
        <Card.Body>
          <div className='d-flex'>
            <Card.Title className='px-1'>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </div>
          <Card.Text>{info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
