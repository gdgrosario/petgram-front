import { CardPost } from "@components/CardPost/CardPost";
import { GridCardPost } from "@components/CardPost/GridCardPost";
import { InfiniteScroll } from "@components/InfiniteScroll";
import { PostSkeleton } from "@components/skeleton/PostSkeleton";
import { getAllPost } from "@services/Posts";
import { Post } from "src/models/User";
import { usePaginateResponse } from "../../hooks/usePaginateResponse";

export function Hero() {
  const totalPages = 8;
  const {
    data: post,
    totalResponses,
    page,
    setPage,
    loading,
    error,
  } = usePaginateResponse<Post>({
    callBackRequest() {
      return getAllPost({
        limit: totalPages,
        skip: page,
      });
    },
  });

  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;

  return (
    <main className="hero">
      <GridCardPost>
        <>
          {post && (
            <InfiniteScroll
              loading={loading}
              max={totalResponses}
              min={post.length}
              actionData={() => setPage((prev) => (prev += 1))}
            >
              {post.map((post) => (
                <CardPost key={post.id} {...post} postId={post.id} />
              ))}
            </InfiniteScroll>
          )}
          {loading &&
            Array.from({ length: 10 }, (_, i) => <PostSkeleton key={i} />)}
        </>
      </GridCardPost>
    </main>
  );
}
