import { useState } from "react";

// Adds Cloudinary auto-format/quality + responsive srcSet. Falls back to a soft clay block if the image fails.
export default function SmartImage({
  src,
  alt,
  widths = [400, 800, 1200],
  sizes = "100vw",
  eager = false,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div role="img" aria-label={alt} className={`bg-sand ${className}`} />;
  }

  const isCloudinary = src.includes("/upload/");
  const t = (w) => src.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${w}/`);

  return (
    <img
      src={isCloudinary ? t(widths[1] ?? widths[0]) : src}
      srcSet={isCloudinary ? widths.map((w) => `${t(w)} ${w}w`).join(", ") : undefined}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}


