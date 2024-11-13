import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
  return (
    <Link href="/">
      <Image src="MyLogo.svg" alt="logo" width={100} height={100} />
    </Link>
  )
}
