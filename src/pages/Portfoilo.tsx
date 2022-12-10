import react from 'react'
import { Container, ImageProps } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';
import offgrid from '../assets/offgrid.png'
import scubadoo from '../assets/scubadoo.png'
import gathersg from '../assets/gathersg.png'
import { Url } from 'url';

interface CardInfo {
  title: string;
  text: string;
  info: string;
  link: string;
}

const Portfoilo = () => {
  const infos: CardInfo[] = [];
  const infoText ={
    offgrid: "Offgrid was developed to help hikers",
    scubadoo: "A marketplace clone developed within 3 days",
    gathersg: "-"
}
  const productOffgid = { title: "OffGrid", text: "Final project", link: offgrid, info: infoText.offgrid};
  const productScubadoo = { title: "Scubadoo", text: "EC clone", link: scubadoo, info: infoText.scubadoo };
  const productGathersg = { title: "GatherSG", text: "Case management", link: gathersg, info: infoText.gathersg };
  infos.push(productOffgid, productScubadoo, productGathersg);

  const renderCards = () => {
    const cards = infos.map((info) => {
      return(
        <CustomCard
          className='col'
          title={info.title}
          text={info.text}
          info={info.info}
          link={info.link}
        />
      )
    })

    return cards
  }

  return (
    <main>
      <Container fluid style={{ margin: "auto", paddingTop: "2vw", paddingInline: "5vw" }}>
        <div className='py-5 px-4 pb-0'>
          <h2 className='pb-2 border-bottom'>Portfoilo</h2>
          <p>This section contains work that I was involved in or developed</p>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-3 py-2 m-0"
          style={{ paddingInline: "5vw" }}>
          {renderCards()}
        </div>
      </Container>
    </main>
  );
}

export default Portfoilo;
