import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ description, img, location, price, star, title, total }) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
