import {
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
  ChevronDownIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const dataLeft = [
  { icon: EnvelopeIcon, text: "Shopme@gmail.com" },
  { icon: PhoneArrowUpRightIcon, text: "(12345)56890" },
];

const dataRight = [
  { icon: ChevronDownIcon, text: "English" },
  { icon: ChevronDownIcon, text: "USD" },
  { icon: UserIcon, text: "Login", href: "/login" },
  { icon: HeartIcon, text: "Wishlist", href: "/wishlist" },
];

export { dataLeft, dataRight };
