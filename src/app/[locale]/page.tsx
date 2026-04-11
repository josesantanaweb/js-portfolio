import { getTranslations } from 'next-intl/server'
import { AboutMe, MainSection } from '@/features'

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const t = await getTranslations('HomePage')

  return (
    <main className="mx-auto w-full">
      <MainSection />
      <AboutMe />
{/*
      {locale === 'es' ? (
        <Link href="/" locale="en" className="underline">
          {t('switchToEnglish')}
        </Link>
      ) : (
        <Link href="/" locale="es" className="underline">
          {t('switchToSpanish')}
        </Link>
      )} */}
    </main>
  )
}
