import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react from 'react'
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

interface props {
  className?: string;
  title: string;
  img: string;
  link?: string;
}

const CustomCard = ({ className, title, img, link }: props) => {
  const { t } = useTranslation();

  const titles: any = {
    offgrid: `${t("portfoilo.offgrid.title")}`,
    scubadoo: `${t("portfoilo.scubadoo.title")}`,
    gathersg: `${t("portfoilo.gathersg.title")}`
  }
  const descriptions: any = {
    offgrid: `${t("portfoilo.offgrid.description")}`,
    scubadoo: `${t("portfoilo.scubadoo.description")}`,
    gathersg: `${t("portfoilo.gathersg.description")}`
  }
  const infos: any = {
    offgrid: `${t("portfoilo.offgrid.info")}`,
    scubadoo: `${t("portfoilo.scubadoo.info")}`,
    gathersg: `${t("portfoilo.gathersg.info")}`
  }

  return (
    <div className={`${className}`}>
      <Card className='bg-dark h-100 text-white'>
        <Card.Img src={img} variant="top" alt={title} className='h-100'/>
        <Card.ImgOverlay className='d-flex justify-content-end align-items-end'>
          { link &&
            <Card.Link href={link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon color='white' size='1x' icon={faGithub} />
            </Card.Link>
          }
        </Card.ImgOverlay>
        <Card.Body>
          <div className='d-flex'>
            <Card.Title className='px-1'>{titles[title]}</Card.Title>
            <Card.Text>{descriptions[title]}</Card.Text>
          </div>
          <Card.Text className='text-wrap'>{infos[title]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCard;
