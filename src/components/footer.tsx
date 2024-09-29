import { Typography, Button, IconButton } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Join now as a member!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Connect with our brilliant community innovating Science.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <a href="https://t.me/DeSciAsia" target="_blank">
              <Button color="white" size="md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Join Community
              </Button>
            </a>

          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            DeSci Asia
          </Typography>
          {/* <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul> */}
          <div className="flex w-fit justify-center gap-2">
            <Link href={"https://x.com/DeSciAsia"}>
              <IconButton size="sm" color="gray" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-x text-lg" />
              </IconButton>
            </Link>
            {/* <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton> */}
            <Link href={"https://t.me/DeSciAsia"}>
              <IconButton size="sm" color="gray" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-telegram text-lg" />
              </IconButton>
            </Link>
            <Link href={"https://github.com/DeSci-Asia"}>
              <IconButton size="sm" color="gray" variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </Link>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          &copy; {CURRENT_YEAR} Made with ❤️ for {" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            DeSci Asia
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
