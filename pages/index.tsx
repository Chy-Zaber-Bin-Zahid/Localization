import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google"; // Keeping your fonts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      <div style={{ marginTop: '40px' }}>
        <h2>Language Switcher</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {router.locales?.map((locale) => (
            <li key={locale} style={{ margin: '5px 0' }}>
              <Link href={router.asPath} locale={locale}>
                {locale.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}