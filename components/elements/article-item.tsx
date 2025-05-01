import Image from "next/image";
import Link from "next/link";
import AccessibleDiv from "../ui/accessible-div";

type Props = {
  url: string;
  title: string;
  description?: string;
  date?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};
export function ArticleItem(props: Props) {
  return (
    <Link
      href={props.url}
      className="group rounded-lg py-6 px-3 flex flex-col-reverse min-[500px]:flex-row gap-4 justify-between items-start hover:bg-secondary/30"
    >
      <div className="flex flex-col gap-3 flex-1">
        <AccessibleDiv
          tag={props.titleTag ?? "p"}
          className="text-xl font-medium text-foreground tracking-wide"
          // data-aos="fade-up"
        >
          {props.title}
        </AccessibleDiv>
        <p
        // data-aos="fade-up" data-aos-delay="50"
        >
          {props.description}
        </p>
        {props.date && (
          <p className="font-semibold uppercase font-mono text-xs">
            {new Date(props.date).toLocaleDateString("en", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
      </div>
      {props.coverImageUrl && (
        <div
          className="relative w-full min-[500px]:w-32 sm:w-32 md:w-40 bg-secondary aspect-[3/2] rounded-xl overflow-clip"
          // data-aos="fade-up"
        >
          <Image
            src={props.coverImageUrl}
            fill
            alt={props.coverImageAlt ?? "cover"}
            className="object-cover rounded-xl"
          />
        </div>
      )}
    </Link>
  );
}
