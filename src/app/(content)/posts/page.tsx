import { getPosts } from "@sanity/lib/query";
import type { PostType } from "@app/types";
import { urlForImage } from "@sanity/lib/image";
import { Card } from "@components/ui/card/Card";

export default async function Posts() {
  const posts: PostType[] = await getPosts();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Posts</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-black dark:text-white">
        {posts.map((document) => (
          <Card
            key={document._id}
            href={`posts/${document.slug.current}`}
            image={urlForImage(document.mainImage).width(300).url()}
            title={document.title}
            description={document.description}
            author={document.author?.name}
          />
        ))}
      </div>
    </div>
  );
}
