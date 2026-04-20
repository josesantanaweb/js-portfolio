import { AboutMe, MainSection, Technologies } from '@/sections'

const ANCHOR_SECTIONS = [
  ['experience', 'Experience'],
  ['technologies', 'Technologies'],
  // ['projects', 'Projects'],
  // ['blog', 'Blog'],
  // ['contact', 'Contact'],
] as const

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  await params

  return (
    <main className="mx-auto w-full">
      <MainSection />
      <AboutMe />
      <Technologies />
      {/* {ANCHOR_SECTIONS.map(([id, title]) => (
        <section
          key={id}
          id={id}
          aria-label={title}
          className="border-stroke scroll-mt-16 border-t py-16"
        />
      ))} */}
    </main>
  )
}
