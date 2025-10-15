import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="flex gap-4">
      {locales?.map((l) => (
        <div key={l}>
          {l === locale ? (
            <span className="font-bold text-lg">{l.toUpperCase()}</span>
          ) : (
            <Link href={asPath} locale={l} className="text-lg hover:underline">
              {l.toUpperCase()}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}