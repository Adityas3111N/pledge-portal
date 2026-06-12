"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const orders = [
  {
    number: 1,
    titleKey: "governmentOrders.items.item1.title",
    descriptionKey: "governmentOrders.items.item1.description",
    dateKey: "governmentOrders.items.item1.date",
  },
  {
    number: 2,
    titleKey: "governmentOrders.items.item2.title",
    descriptionKey: "governmentOrders.items.item2.description",
    dateKey: "governmentOrders.items.item2.date",
  },
  {
    number: 3,
    titleKey: "governmentOrders.items.item3.title",
    descriptionKey: "governmentOrders.items.item3.description",
    dateKey: "governmentOrders.items.item3.date",
  },
  {
    number: 4,
    titleKey: "governmentOrders.items.item4.title",
    descriptionKey: "governmentOrders.items.item4.description",
    dateKey: "governmentOrders.items.item4.date",
  },
  {
    number: 5,
    titleKey: "governmentOrders.items.item5.title",
    descriptionKey: "governmentOrders.items.item5.description",
    dateKey: "governmentOrders.items.item5.date",
  },
];

interface GovernmentOrdersProps {
  showBgImage?: boolean;
}

export default function GovernmentOrders({
  showBgImage = true,
}: GovernmentOrdersProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState<number>(3);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 200); // 200ms delay before switching active state
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <section className="w-full relative overflow-hidden bg-white">
      {/* Full-width Background Image */}
      {showBgImage && (
        <>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/backgrounds/bg_image_shashanadesh.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>

          {/* White Overlay */}
          <div className="absolute inset-0 w-full h-full bg-white/85" aria-hidden="true" />

          {/* Left White Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-[200px] md:w-[418px] bg-gradient-to-r from-white to-transparent z-[1]" aria-hidden="true" />

          {/* Right White Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-[200px] md:w-[418px] bg-gradient-to-l from-white to-transparent z-[1]" aria-hidden="true" />
        </>
      )}


      {/* Content */}
      <div className="relative z-10 w-full max-w-[1090px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col items-center gap-[40px]">
        {/* Heading Block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[7vw] min-[450px]:text-[28px] md:text-[44px] font-medium leading-[100%] text-neutral-near-black font-sans">
            {t("governmentOrders.titlePart1")}{" "}
            <span className="text-brand-orange-accent">
              {t("governmentOrders.titlePart2")}
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal leading-[27px] text-neutral-text-gray font-sans max-w-[650px]">
            {t("governmentOrders.description")}
          </p>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {orders.map((order, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`w-full h-[293px] rounded-[8px] border p-4 md:p-6 flex flex-col justify-between cursor-default transition-all duration-500 ease-in-out hover:shadow-lg ${
                  isActive
                    ? "bg-brand-orange-accent border-brand-orange-accent text-white"
                    : "bg-white border-[#E0E0E0] text-neutral-near-black hover:border-brand-orange-accent/40"
                }`}
              >
                {/* Number Badge */}
                <div className="flex flex-col gap-4">
                  <div
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-[16px] font-medium font-sans transition-all duration-500 ease-in-out ${
                      isActive
                        ? "bg-white text-brand-orange-accent"
                        : "bg-brand-orange-accent text-white"
                    }`}
                  >
                    {order.number}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-[16px] font-medium leading-[22px] font-sans transition-colors duration-500 ease-in-out ${
                      isActive ? "text-white" : "text-neutral-near-black"
                    }`}
                  >
                    {t(order.titleKey)}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[12px] font-normal leading-[16px] font-sans transition-colors duration-500 ease-in-out ${
                      isActive ? "text-white/90" : "text-neutral-text-gray"
                    }`}
                  >
                    {t(order.descriptionKey)}
                  </p>
                </div>

                {/* Date */}
                <p
                  className={`text-[14px] font-medium leading-[100%] font-sans transition-colors duration-500 ease-in-out ${
                    isActive ? "text-white" : "text-brand-orange-accent"
                  }`}
                >
                  {t(order.dateKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
