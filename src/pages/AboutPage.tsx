import react from 'react'
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import GridItem from '../components/GridItem';
import { Logos } from '../constants/constant';

interface GridInfo {
  title: string;
  img: string;
  description: string;
}

const AboutPage = () => {
  const { t } = useTranslation();
  const infos: GridInfo[] = [];
  const descriptions: any = {
    react: `${t("aboutpage.react.description")}`,
    typescript: `${t("aboutpage.typescript.description")}`,
    bootstrap: `${t("aboutpage.bootstrap.description")}`,
    github: `${t("aboutpage.github.description")}`
  }

  const react = { title: "react", img: Logos.react, description: descriptions.react };
  const typescript = { title: "typescript", img: Logos.typescript, description: descriptions.typescript };
  const bootstrap = { title: "bootstrap", img: Logos.bootstrap, description: descriptions.bootstrap };
  const github = {title: "github", img: Logos.github, description: descriptions.github }
  infos.push(react, typescript, bootstrap, github);


  const renderGrid = () => {
    const items = infos.map((info) => {
      return(
        <GridItem
          key={info.title}
          title={info.title}
          img={info.img}
          description={info.description}
        />
      )
    })

    return items;
  }

  return (
    <main>
      <Container fluid style={{ margin: "auto", paddingTop: "4vw", paddingInline: "5vw" }}>
        <div className='d-flex flex-column py-5 px-4'>
          <h2 className="pb-2 border-bottom">{t("aboutpage.title")}</h2>
          <p className='pt-2'>{t("aboutpage.subtext")}</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            {renderGrid()}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default AboutPage;
