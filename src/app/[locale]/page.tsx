import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import MainSection from '@/features/main-section';

type HomePageProps = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: HomePageProps) {
  const {locale} = await params;
  const t = await getTranslations('HomePage');

  return (
    <main className="mx-auto min-h-screen w-full">
      <MainSection />

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
