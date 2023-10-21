import style from './style.module.css'

import { useSelector } from 'react-redux'
import {
  ImagePreviewCard,
  SkeletonPreviewCard,
} from 'shared/ui/preview'
import { lessonModel } from 'entities/lesson'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib'
import { Header2 } from 'entities/header2'
import { disciplineModel } from 'entities/discipline'
import { usePathname, useRouter } from 'next/navigation'

export function Disciplines({
  params,
}: {
  params: { disciplineId: string }
}) {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const lessons = useSelector(lessonModel.selectors.lessons)
  const loading = useSelector(lessonModel.selectors.loading)

  const disciplineTitle = useSelector(
    disciplineModel.selectors.disciplineTitle(params.disciplineId)
  )

  useEffect(() => {
    dispatch(lessonModel.operations.getLessons(params.disciplineId))
  }, [])

  return (
    <>
      <Header2 disciplineTitle={disciplineTitle} groupId='123' />
      <main className={style.main}>
        <section>
          <h1>Задания</h1>

          {loading ? (
            <div className={style.programsList}>
              {Array(5)
                .fill(0)
                .map(() => (
                  <SkeletonPreviewCard />
                ))}
            </div>
          ) : (
            <div className={style.programsList}>
              {lessons.map(d => (
                <div
                  onClick={() => {
                    router.push(pathname + `/${d.id}`)
                  }}
                >
                  <ImagePreviewCard {...d} isVideo />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
