/* eslint-disable react/react-in-jsx-scope */
import styles from './ButtonTemplate.module.css';

type ButtonTemplateType = {
  number: string;
  title: string;
  msg: string;
  model: 'event' | 'breads'; // Tipagem explícita para modelos possíveis
};

export default function ButtonTemplate({
  number, title, msg, model,
}: ButtonTemplateType) {
  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[model]}`} // Aqui estamos aplicando a classe dinamicamente
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      {title}
    </button>
  );
}
