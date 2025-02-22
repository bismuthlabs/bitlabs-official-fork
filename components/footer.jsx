import { Typography } from '@material-tailwind/react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div>Logo</div>
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-gray-400 focus:text-gray-500"
            >
              Instagram
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-gray-400 focus:text-gray-400"
            >
              Twitter
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-gray-400 focus:text-gray-500"
            >
              WhatsApp
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-gray-400 focus:text-gray-500"
            >
              +233 592 00 0000
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-gray-400" />
      <Typography color="blue-gray" className="text-center text-sm font-light">
        &copy; 2023 Bismuth Institute of Technology
      </Typography>
    </footer>
  );
}
