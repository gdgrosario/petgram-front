import { CardPost } from '@components/CardPost/CardPost'
import { GridCardPost } from '@components/CardPost/GridCardPost'
import { PostSkeleton } from '@components/skeleton/PostSkeleton'

export function Hero () {
  return (
    <main className="hero">
      <GridCardPost>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
          <PostSkeleton key={i} />
        ))}
      </GridCardPost>
    </main>
  )
}
