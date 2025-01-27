import Image from "next/image";

interface SiteBannerBProps {
  title?: string;
  content?: string;
  image?: string;
  subContent?: string;
}

function SiteBannerB({ title, content, image, subContent }: SiteBannerBProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
          <div className="-z-1 -u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]" />
          <div className="-z-1 -u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]" />
          <div className="-u-z-10 absolute left-1/2 top-0 -translate-x-1/2">
            <img src="/images/blur-02.svg" alt="blur" className="max-w-none" />
          </div>
          <div className="-u-z-10 absolute left-1/2 top-0 -translate-x-1/2 opacity-30">
            <img src="/images/blur-01.svg" alt="blur" className="max-w-none" />
          </div>
        </div>
      </div>
      <div className="z-1 relative mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
        <h1 className="xl:text-heading-1 mb-6 text-center text-3xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="text-center text-nd-primary-100">{content}</p>
        {subContent ? (
          <p className="mt-4 text-center text-nd-primary-100">{subContent}</p>
        ) : null}
      </div>
      <div className="mx-auto mt-20 h-80 max-w-screen-lg overflow-hidden rounded-lg">
        {image ? (
          <Image
            src={image}
            alt="product strategy design"
            className="h-full w-full object-cover object-center"
            width={1200}
            height={630}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SiteBannerB;
