import { BreadsGalleryDataType } from '../types/BreadsGalleryDataType.tsx';

import foto01 from '../assets/BreadsGallery/01_pao.webp';
import foto02 from '../assets/BreadsGallery/02_pao.webp';
import foto03 from '../assets/BreadsGallery/03_pao.webp';
import foto04 from '../assets/BreadsGallery/04_pao.webp';
import foto05 from '../assets/BreadsGallery/05_pao.webp';
import foto06 from '../assets/BreadsGallery/06_pao.webp';
import foto07 from '../assets/BreadsGallery/07_pao.webp';

const BreadsGalleryData: BreadsGalleryDataType[] = [
  {
    id: 1,
    altText: 'nome do pão',
    breadName: 'Pão Integral',
    image: foto01,
  },
  {
    id: 2,
    altText: 'nome do pão',
    breadName: 'Pão de milho com Girasol',
    image: foto02,
  },
  {
    id: 3,
    altText: 'nome do pão',
    breadName: 'Pão de Chocolate',
    image: foto03,
  },
  {
    id: 4,
    altText: 'nome do pão',
    breadName: 'Pão delicia de Minas',
    image: foto04,
  },
  {
    id: 5,
    altText: 'nome do pão',
    breadName: 'Pão Australiano',
    image: foto05,
  },
  {
    id: 6,
    altText: 'nome do pão',
    breadName: 'Pão de Milho',
    image: foto06,
  },
  {
    id: 7,
    altText: 'nome do pão',
    breadName: 'Brioche',
    image: foto07,
  },
];

export default BreadsGalleryData;
