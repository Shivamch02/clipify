import { FaXTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import Button from "./Button";
export const Header = () => {
  return (
    <div className="flex justify-between items-center border border-gray-600 sm:p-4 p-3 rounded-xl">
      <div className="md:text-4xl text-2xl font-bold text-white ">Clipify</div>
      <div>
        <div className="gap-2 flex ">
          <Link href={"https://shivamchaurasiya.vercel.app"} target="_blank">
            <Button icon={<FaUser />} text="Portfolio" />
          </Link>
          <Link href={"https://x.com/_cvam"} target="_blank">
            <Button icon={<FaXTwitter />} text="Twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};
