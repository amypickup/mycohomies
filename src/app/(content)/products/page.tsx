import Image from "next/image";
import { getFeaturedProducts } from "../../../../sanity/lib/query";
import type { ProductType } from "../../types";
import { urlForImage } from "../../../../sanity/lib/image";

export default async function Home() {
  const products: ProductType[] = await getFeaturedProducts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-black dark:text-white">
        {products.map((product) => (
          <div key={product._id}>
            <Image
              src={urlForImage(product.mainImage)
                .width(800)
                .fit("max")
                .auto("format")
                .url()}
              width={800}
              height={460}
              alt={product.mainImage?.alt || product.title}
              priority={true}
            />
            <h2 className="font-semibold text-4xl mb-2 px-3 md:px-0">
              {product.title}
            </h2>
            <p className="">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
