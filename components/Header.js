import Image from "next/image";
import huluImage from '../Images/hulu-image.png'
import HeaderItem from "./HeaderItem";
import {HomeIcon} from "@heroicons/react/outline";

function Header() {
    return (
      <div>
        <div>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </div>
        <header className="">
          <Image
            className="object-contain"
            src={huluImage}
            width={200}
            height={100}
          />
        </header>
      </div>
    );
}

export default Header
