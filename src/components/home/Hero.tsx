import { CardPost } from '@components/CardPost/CardPost';
import { GridCardPost } from '@components/CardPost/GridCardPost';
import { InfiniteScroll } from '@components/InfiniteScroll';
import { PostSkeleton } from '@components/skeleton/PostSkeleton';
import { usePaginateResponse } from '@hooks/usePaginateResponse';
import { getAllPost } from '@services/Posts';
import { Post } from 'src/models/User';

export function Hero() {
  const {
    loading,
    error,
    data: posts,
    totalResponses,
    setPage,
    totalPages,
    page,
  } = usePaginateResponse<Post>({
    callBackRequest() {
      return getAllPost({
        skip: page,
        limit: totalPages,
      });
    },
    totalP: 10,
  });

  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;

  return (
    <main className="hero">
      <GridCardPost>
        <>
          {posts && (
            <InfiniteScroll
              data={posts}
              loading={loading}
              actionData={() => {
                totalResponses > totalPages && setPage(totalPages);
              }}
              component={CardPost}
            />
          )}
          {loading &&
            Array.from({ length: 10 }, (_, i) => <PostSkeleton key={i} />)}
        </>
      </GridCardPost>
    </main>
  );
}
