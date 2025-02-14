/* eslint-disable react/react-in-jsx-scope */
import styles from './ButtonTemplate.module.css';
import { CallToActionBt } from '../../types/PageDataType.tsx';

type ButtonTemplateProps = {
  callToActionBt: CallToActionBt
};

export default function ButtonTemplate({ callToActionBt }: ButtonTemplateProps) {
  if (!callToActionBt || !callToActionBt.phoneNumber || !callToActionBt.buttonTitle) {
    return null;
  }

  const {
    phoneNumber, buttonTitle, message = '', model = 'default',
  } = callToActionBt;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[model]}`}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      {buttonTitle}
    </button>
  );
}
