import { CardPost } from '@components/CardPost/CardPost';
import { GridCardPost } from '@components/CardPost/GridCardPost';
import { PostSkeleton } from '@components/skeleton/PostSkeleton';
import { useGetPosts } from '../../hooks/useGetPost';

export function Hero() {
  const { posts, loading, error } = useGetPosts();

  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;

  return (
    <main className="hero">
      <GridCardPost>
        {loading &&
          Array.from({ length: 10 }, (_, i) => <PostSkeleton key={i} />)}
        {posts &&
          posts.map((post) => (
            <CardPost
              key={post.id}
              user={post.user}
              description={post.description}
              image={post.image}
              comments={post.comments}
            />
          ))}
      </GridCardPost>
    </main>
  );
}
