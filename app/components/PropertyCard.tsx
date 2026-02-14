import Image from "next/image";

interface PropertyCardProps {
  image: string;
  alt: string;
  badge?: string;
  title: string;
  location: string;
  details: string[];
  price: string;
}

export default function PropertyCard({
  image,
  alt,
  badge,
  title,
  location,
  details,
  price,
}: PropertyCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border">
      <div className="relative aspect-[3/2]">
        <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        {badge && (
          <span className="absolute top-3 left-3 bg-terra text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-text-light text-sm mb-3">{location}</p>
        <div className="flex flex-wrap gap-3 text-sm text-text-light mb-4">
          {details.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <p className="text-xl font-bold text-olive">{price}</p>
      </div>
    </article>
  );
}
