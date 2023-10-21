import style from './style.module.css'

import { NewsPreview } from 'entities/news'
import { ImagePreviewCard } from 'shared/ui/preview'

import { newsModel } from 'entities/news'
import { useSelector } from 'react-redux'
import { usePathname, useRouter } from 'next/navigation'
import { disciplineModel } from 'entities/discipline'

export function Main() {
  const router = useRouter()
  const pathname = usePathname()
  const news = useSelector(newsModel.selectors.news)
  const disciplines = useSelector(
    disciplineModel.selectors.disciplines
  )

  return (
    <main className={style.main}>
      <section>
        <h1>Новости</h1>
        <div className={style.newsList}>
          {news.map(n => (
            <NewsPreview {...n} />
          ))}
        </div>
      </section>

      <section>
        <h1>Мои дисциплины</h1>
        <div className={style.programsList}>
          {disciplines.map(p => (
            <div
              onClick={() => {
                router.push(pathname + `/${p.id}`)
              }}
            >
              <ImagePreviewCard {...p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
