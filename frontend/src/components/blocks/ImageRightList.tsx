import Image from "next/image";
import React from "react";
type itemList = {
  title: string;
  content: string;
};

interface ImageRightListProps {
  title: string;
  content: string;
  image: string;
  list: itemList[];
}
function ImageRightList({ title, content, list, image }: ImageRightListProps) {
  return (
    <div className="bg-nd-secondary-900/20 py-3">
      <div className="mx-auto mb-32 mt-20 max-w-[1222px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[630px] overflow-hidden">
              <Image
                src="/images/img-container.svg"
                alt=""
                className="absolute bottom-0 left-0 top-0 h-[250px] w-full lg:h-[500px]"
                width={630}
                height={630}
              />
              <div className="mx-auto h-full w-40 overflow-hidden lg:w-[320px]">
                <Image
                  src={image}
                  alt="Next Dynamics Inc."
                  className="h-[250px] w-full object-cover object-center lg:h-[500px]"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-semibold mb-14 px-8 text-left text-2xl text-white lg:px-0 lg:text-5xl">
              {title}
            </h2>
            <div className="text-sm text-white">
              {list.map((item, index) => {
                return (
                  <div
                    className="border-nd-secondary-900 flex items-start border-b py-5 last:border-b-0 last:pb-0"
                    key={index}
                  >
                    <div className="mr-5 w-8">
                      <Image
                        width={32}
                        height={32}
                        alt=""
                        className="h-8 w-8"
                        src="/images/nd-arrow.svg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      {item.content ? (
                        <p className="text-sm leading-relaxed">
                          {item.content}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageRightList;
