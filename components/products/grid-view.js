import Image from "next/image";
import Link from "next/link";

export function GridView({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center gap-x-14 gap-y-20 mt-36">
      {products?.map(({ id, title, price, image }) => {
        return (
          <div key={id} className="relative max-w-[270px]">
            <figure className="relative w-[270px] h-[280px] bg-white">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </figure>
            <div className="mt-4 text-center">
              <h3 className="text-lg text-navy-blue josefin-bold">{title}</h3>
              <h4 className="text-sm text-navy-blue josefin-regular mt-5">
                ${price}
              </h4>
            </div>

            <Link
              href={`/product/details/${id}`}
              className="absolute inset-0"
            ></Link>
          </div>
        );
      })}
    </div>
  );
}
