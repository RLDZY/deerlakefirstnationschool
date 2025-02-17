import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

export function HeroImage() {
  return (
    (<div className="w-[100%] mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />
        }>
        <div
          className="bg-hero-image bg-contain bg-no-repeat relative overflow-hidden w-[450px] lg:w-[660px] h-[360px] transition duration-200 group">
        </div>
      </FollowerPointerCard>
    </div>)
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Deer Lake First Nation School",
  image: "/image/hero-img.png",
  authorAvatar: "/image/deer-icon.png",
};

const TitleComponent = ({
  title,
  avatar
}) => (
  <div className="flex space-x-2 items-center bg-[#849BF4] transition rounded-full px-4 py-2">
    <Image
      src={avatar}
      height="30"
      width="30"
      alt="thumbnail"
      className="rounded-full border-2 border-white " />
      
    <p>{title}</p>
  </div>
);
