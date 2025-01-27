import Image from "next/image";

type itemList = {
  title: string;
  content?: string;
  image: string;
};

interface ImageTitleListProps {
  title: string;
  content: string;
  list: itemList[];
}
function ImageTitleList({ title, content, list }: ImageTitleListProps) {
  return (
    <section>
      <div className="min-h-[70vh] bg-[url(/bg-lines.svg)] py-36">
        <div className="container">
          <h2 className="text-semibold text-center text-2xl text-white lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-center text-sm text-white lg:text-base">
            {content}
          </p>
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="bg-nd-secondary-800/50 hover:bg-nd-secondary-800/80 group flex flex-col flex-wrap items-center justify-between gap-2 rounded-lg p-12 text-white transition-all duration-300 lg:flex-row"
              >
                <div className="order-2 flex-1 text-xl font-light lg:order-1">
                  <p className="font-medium">{item.title}</p>
                  {item.content && (
                    <p className="mt-2 text-sm text-white lg:text-sm">
                      {content}
                    </p>
                  )}
                </div>
                <div className="shadow-nd-secondary-700 order-1 mb-4 h-28 w-28 overflow-hidden rounded-lg opacity-80 shadow-lg transition-all group-hover:opacity-100 lg:order-2 lg:mb-0">
                  {item.image ? (
                    <Image
                      width={328}
                      height={328}
                      className="h-full w-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageTitleList;
