import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div style={{ padding: 20 }}>
      <LanguageSwitcher />
      <h1 className="mt-4">{t('welcome')}</h1>
      <p>{t('greeting', { name: 'Zaber' })}</p>
      <p>{t('language')}</p>
      {/* <div style={{ marginTop: 20 }}>
        <Link href="/" locale="en">🇬🇧 English</Link> |{' '}
        <Link href="/" locale="ja">🇯🇵 Japanese</Link> |{' '}
        <Link href="/" locale="bn">🇧🇩 Bangla</Link>
      </div> */}
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
