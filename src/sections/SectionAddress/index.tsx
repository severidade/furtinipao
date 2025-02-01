/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { PortableText } from '@portabletext/react';
import styles from './SectionAddress.module.css';
// import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import HighlightGalleryAddress from '../../components/HighlightGalleryAddress/index.tsx';
import CallUber from '../../components/CallUber/index.tsx';
import { useFetchAddressData } from '../../CustomHooks/useFetchAddressData.tsx';

type AddressProps = {
  id: string;
  // dataSection: SectionTemplateType[];
};

// Subcomponente para o título e subtítulo
function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className={styles.header_address}>
      <h2 className={styles.header_address_title}>{title}</h2>
      {subtitle && <address className={styles.address_details}><p>{subtitle}</p></address>}
    </section>
  );
}

const portableTextComponents = {
  types: {
    block: ({ value }: { value: any }) => {
      switch (value.style) {
        case 'normal':
          return <p>{value.children.map((child: any) => child.text).join(' ')}</p>;
        default:
          return <p>{value.children.map((child: any) => child.text).join(' ')}</p>;
      }
    },
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>,
  },
};

// Subcomponente para as características
function Characteristics({ content }: { content: any[] }) {
  return (
    <section className={styles.accessibility_info}>
      <PortableText value={content} components={portableTextComponents} />
    </section>
  );
}

// Subcomponente para o slider de galeria
function Gallery({ gallerySlider }: { gallerySlider: any[] }) {
  return <HighlightGalleryAddress highlightItems={gallerySlider} />;
}

export default function SectionAddress({ id }: AddressProps) {
  const { addressData, isLoading, error } = useFetchAddressData(id);

  if (isLoading) return <div>Carregando...</div>;

  if (error) {
    return (
      <div>
        Erro ao carregar:
        {error.message}
      </div>
    );
  }

  const {
    header: { title, subtitle },
    content,
    gallerySlider,
  } = addressData[0];

  // console.log('Este é o objeto inteiro:', addressData[0]);

  console.log('Este é o conteúdo que precisa de block content:', content);

  return (
    <section id={id} className={styles.container_address}>
      {gallerySlider && <Gallery gallerySlider={gallerySlider} />}
      <Header title={title} subtitle={subtitle} />
      {/* {content && <Characteristics characteristics={content} />} */}
      {content && <Characteristics content={content} />}
      <CallUber />
    </section>
  );
}
