import react from 'react'
import { Container } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';
import offgrid from '../assets/offgrid.png'
import scubadoo from '../assets/scubadoo.png'
import gathersg from '../assets/gathersg.png'

interface CardInfo {
  title: string;
  text: string;
  info: string;
  link: string;
}

const Portfoilo = () => {
  const infos: CardInfo[] = [];
  const infoText ={
    offgrid: `Offgrid was developed to help novice hikers prepare for their hiking trip.
      We identified the lack of concise information for hikers and the lack of communication between hikers and their family/friends.`,
    scubadoo: `Scubadoo is a marketplace clone (of Padi) developed within 3 days,
      this app was created to help divers locate dive centers and dive listings around the world.`,
    gathersg: `Maintained and developed features. Developed REST API for system integrations.
    Engaged with stakeholders and users to provide support for their issues. `
}
  const productOffgid = { title: "OffGrid", text: "Final project", link: offgrid, info: infoText.offgrid};
  const productScubadoo = { title: "Scubadoo", text: "Marketplace clone", link: scubadoo, info: infoText.scubadoo };
  const productGathersg = { title: "GatherSG", text: "Case management", link: gathersg, info: infoText.gathersg };
  infos.push(productOffgid, productScubadoo, productGathersg);

  const renderCards = () => {
    const cards = infos.map((info) => {
      return(
        <CustomCard
          key={info.title}
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
          <p className='fs-5'>This section contains work that I was involved in or developed.</p>
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
