// import { BreadsSectionDataType } from '../types/BreadsSectionDataType.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

const DEFAULT_HEADER = {
  title: 'Fornadas',
  subtitle: 'Nossos pães são feitos com base de fermentação natural. São pães integrais, lindos, elegantes e sinceros. Você pode consumi-los no café ou levá-los para casa.',
};

const DEFAULT_INFO = 'Acompanhe nossa página no Instagram e saiba quais são os pães da semana. Faça seus pedidos por WhatsApp clicando no botão a seguir.';

const DEFAULT_CALL_TO_ACTION = {
  phoneNumber: '5531984738820',
  buttonTitle: 'Faça seus pedidos',
  message: 'Olá! Gostaria de fazer um pedido de pão.',
  model: 'breads',
};

const BreadsSectionData: SectionTemplateType[] = [
  {
    id: 1,
    header: DEFAULT_HEADER,
    content: DEFAULT_INFO,
    callToActionBt: DEFAULT_CALL_TO_ACTION,
  },
];

export default BreadsSectionData;
