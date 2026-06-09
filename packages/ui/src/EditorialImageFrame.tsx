import Image from "next/image";

interface EditorialImageFrameProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  frameClassName?: string;
}

export function EditorialImageFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = "object-cover object-center",
  frameClassName = "",
}: EditorialImageFrameProps) {
  return (
    <div
      className={`editorial-image-frame relative h-full w-full ${frameClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    </div>
  );
}
