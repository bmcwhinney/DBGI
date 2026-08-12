import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} loading="lazy" style={{ maxWidth: "100%", height: "auto" }} alt={props.alt ?? ""} />
  ),
};

export { Image };
