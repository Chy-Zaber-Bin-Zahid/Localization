import { GetStaticProps } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <LanguageSwitcher />
      <h1><FormattedMessage id="welcome" defaultMessage="Welcome" /></h1>
      <p>{intl.formatMessage({ id: 'greeting' }, { name: 'Zaber' })}</p>
      <p><FormattedMessage id="unread" values={{ count: 3 }} /></p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // locale comes from Next.js i18n routing; default to 'en'
  const current = locale || 'en';
  const messages = (await import(`../locales/${current}.json`)).default;

  return {
    props: {
      locale: current,
      messages
    }
  };
};
