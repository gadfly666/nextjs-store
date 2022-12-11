import Image from 'next/image';
import Link from 'next/link';

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link href={href} className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        <span>{children}</span>
      </Link>
    </div>
  )
}

const Banner = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            Summer styles are finally here
          </h1>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn&apos;t care if you live or die.
          </p>
          <UnderlineLink href="#">Explore products</UnderlineLink>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center"></div>
      </div>
      <div className="h-48 flex flex-wrap content-center">
        {/* <Image
          src="/banner.jpg"
          fill
          loading="eager"
          priority={true}
          quality={90}
          style={{ objectFit: "cover" }}
          alt="Photo by @franki https://unsplash.com/@franki"
          className="absolute inset-0"
          draggable="false"
        /> */}
      </div>
    </div>
  )
}

export default Banner