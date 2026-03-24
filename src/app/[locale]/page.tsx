import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';

type HomePageProps = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: HomePageProps) {
  const {locale} = await params;
  const t = await getTranslations('HomePage');

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold">{t('title')}</h1>
      <p className="text-zinc-600 dark:text-zinc-300">{t('description')}</p>

      {locale === 'es' ? (
        <Link href="/" locale="en" className="underline">
          {t('switchToEnglish')}
        </Link>
      ) : (
        <Link href="/" locale="es" className="underline">
          {t('switchToSpanish')}
        </Link>
      )}
    </main>
  );
}
