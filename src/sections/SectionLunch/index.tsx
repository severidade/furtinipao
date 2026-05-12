/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { LunchType } from '../../types/PageDataType.tsx';
import styles from './Lunch.module.css';
import img from './img/cafeamesa.png';
import icone_cafe from './img/xicara.png';
import icone_pao from './img/pao.png';

interface SectionLunchProps {
  id: string;
  data: LunchType[];
}

function Figure({ figure }: { figure?: { url: string; altText?: string } }) {
  if (!figure?.url) return null; // Se não houver `url`, retorna `null`

  return (
    <figure className={styles.header_lunch_dish_photo}>
      <img
        src={figure.url}
        alt={figure.altText || 'Imagem ilustrativa'}
        loading="lazy"
      />
    </figure>
  );
}

function Header({
  header,
}: {
  header: {
    title: string;
    subtitle?: string;
    figure?: { url: string; altText?: string };
  };
}) {
  return (
    <>
      <figure className={styles.header_lunch_dish_photo}>
        <img src={img} alt="imagem temporaria" loading="lazy" />
      </figure>
      <section className={styles.header_lunch}>
        <h2 className={styles.header_lunch_title}>{header.title}</h2>
        {/* {header.figure && <Figure figure={header.figure} />} */}
        {/* <figure className={styles.header_lunch_dish_photo}>
          <img src={img} alt="imagem temporaria" loading="lazy" />
        </figure> */}
        {/* <h3 className={styles.header_lunch_hours}>{header.subtitle}</h3> esse texto não esta mais sendo usado */}
      </section>
    </>
  );
}

function Content({ content }: { content: string }) {
  return (
    <section className={styles.lunch_footer}>
      {/* <p>{content}</p> */}
      {/* desabilitar pra acessar o conteúdo do saniti  */}
      <p>No seu momento de pausa, deixe a pressa de lado. Saborei conosco um delicioso café e produtos recém-saídos do forno.</p>
    </section>
  );
}

export default function Lunch({ id, data }: SectionLunchProps) {
  const { header, content } = data[0];

  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        {header && <Header header={header} />}
        {content && <Content content={content} />}
        <div className={styles.features}>
          <div className={styles.feature_item}>
            <div className={styles.icon_circle}>
              <img className={styles.icon_cafe} src={icone_cafe} alt="" />
            </div>

            <span className={styles.features_destaque}>
              Cafés
              <br />
              Especiais
            </span>
          </div>

          <div className={styles.divider} />

          <div className={styles.feature_item}>
            <div className={styles.icon_circle}>
              <img className={styles.icon_pao} src={icone_pao} alt="" />
            </div>

            <span className={styles.features_destaque}>
              Produtos
              <br />
              Fresquinhos
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
