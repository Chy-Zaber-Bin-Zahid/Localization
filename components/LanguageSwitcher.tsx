import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const { locales, asPath, locale } = useRouter();

  return (
    <div style={{ marginTop: 20 }}>
      {locales?.map((lng) => (
        <Link key={lng} href={asPath} locale={lng}>
          <span style={{
            marginRight: 10,
            fontWeight: locale === lng ? 'bold' : 'normal'
          }}>
            {lng === 'en' && '🇬🇧 EN'}
            {lng === 'ja' && '🇯🇵 JA'}
            {lng === 'bn' && '🇧🇩 BN'}
          </span>
        </Link>
      ))}
    </div>
  );
}
