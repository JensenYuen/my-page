import react from 'react'
import { Container } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';
import offgrid from '../assets/offgrid.png'
import scubadoo from '../assets/scubadoo.png'
import gathersg from '../assets/gathersg.png'
import { useTranslation } from 'react-i18next';

interface CardInfo {
  title: string;
  img: string;
  link?: string;
}

const Portfoilo = () => {
  const { t } = useTranslation();

  const infos: CardInfo[] = [];

  const productOffgid = { title: "offgrid", img: offgrid, link: 'https://github.com/eztree/offgrid' };
  const productScubadoo = { title: "scubadoo", img: scubadoo, link: 'https://github.com/suansen/scubadoo' };
  const productGathersg = { title: "gathersg", img: gathersg };
  infos.push(productOffgid, productScubadoo, productGathersg);

  const renderCards = () => {
    const cards = infos.map((info) => {
      return(
        <CustomCard
          key={info.title}
          className='col'
          title={info.title}
          img={info.img}
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
          <h2 className='pb-2 border-bottom'>{t("portfoilo.header")}</h2>
          <p className='fs-5'>{t("portfoilo.subtext")}</p>
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
