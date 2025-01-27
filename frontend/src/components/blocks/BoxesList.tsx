import Image from "next/image";
import React from "react";

type itemList = {
  title: string;
  content: string;
  image: string;
};
interface BoxesListProps {
  listItems: itemList[];
  invertIcons?: boolean;
}

function BoxesList({ listItems, invertIcons = true }: BoxesListProps) {
  const wrapElements = (
    elements: JSX.Element[],
    key: number,
    isLastRow: boolean,
  ): JSX.Element => (
    <React.Fragment key={key}>
      <div className="flex flex-wrap justify-center">{elements}</div>
    </React.Fragment>
  );

  const renderItems = () => {
    const rows: JSX.Element[] = [];
    let currentRow: JSX.Element[] = [];

    listItems.forEach((item, index) => {
      currentRow.push(
        <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
          <div className="xl:py-15 xl:px-13 group relative overflow-hidden px-4 py-8 text-center transition-all hover:bg-nd-secondary-800/10 sm:py-10 lg:px-8">
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
              {item.image ? (
                <Image
                  src={`/images/${item.image}`}
                  alt=""
                  className={invertIcons ? "invert" : ""}
                  width={36}
                  height={36}
                />
              ) : null}
            </span>
            <h4 className="mb-4 text-lg font-semibold text-white">
              {item.title}
            </h4>
            <p className="font-light text-nd-secondary-100">{item.content}</p>
          </div>
        </div>,
      );

      // If the row is full (3 items) or it's the last item, wrap it
      if (currentRow.length === 3 || index === listItems.length - 1) {
        const isLastRow = index === listItems.length - 1;
        rows.push(wrapElements(currentRow, rows.length, isLastRow));
        currentRow = []; // Start a new row
      }
    });

    return rows;
  };

  return renderItems();
}

export default BoxesList;
