import Image from "next/image";
import huluImage from '../Images/hulu-image.png'
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon

} from "@heroicons/react/outline";

function Header() {
    return (
      <div>
        <div>
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRANDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
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
