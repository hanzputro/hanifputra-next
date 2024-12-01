import Image from "next/image";

export const MyLogo = () => (
  <Image
    src="/assets/icons/hanifputra.webp"
    alt="Hanif Putra Logo"
    width={25}
    height={25}
    priority
  />
);
