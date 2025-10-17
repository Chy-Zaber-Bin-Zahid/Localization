// components/LanguageSwitcher.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locales, asPath, locale: currentLocale } = router;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Switch Language:</p>
      {locales?.map((locale) => (
        <Link
          key={locale}
          href={asPath}
          locale={locale}
          style={{
            marginRight: '10px',
            textTransform: 'uppercase',
            fontWeight: currentLocale === locale ? 'bold' : 'normal',
          }}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
