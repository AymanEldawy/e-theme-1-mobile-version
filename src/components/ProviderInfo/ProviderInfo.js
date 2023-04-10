import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import SeeMore from "../Global/SeeMore/SeeMore";
import Image from "next/image";
import { reviews } from "@/data/dummyData";
import ReviewCard from "../ReviewCard/ReviewCard";

const ProviderInfo = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex gap-4 justify-between">
      <div className="max-w-2xl flex-1">
        <h3 className="text-primary text-lg mb-4  capitalize">
          {fetchWord("about", lang)} {provider?.name}
        </h3>

        <p className="text-lead text-sm max-w-xl">
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with
        </p>
        <div className="mt-20">
          <div className="flex justify-between gap-4 mb-4 items-center">
            <h3 className="text-primary text-lg capitalize">
              {fetchWord("customer_feedback", lang)}
            </h3>
            <SeeMore link="" />
          </div>
          {reviews?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
      <div className="min-w-[400px]">
        <div className="flex justify-between gap-4 mb-4 items-center">
          <h3 className="text-primary text-lg capitalize">
            {fetchWord("some_work", lang)}
          </h3>
          <SeeMore link="" />
        </div>
        <div className="gap-2 flex flex-col">
          <div className="flex gap-2">
            <Image
              src="/images/projects/3.png"
              alt="works 1"
              height={140}
              width={140}
              className="rounded-md object-cover max-w-fit flex-1"
            />
            <Image
              src="/images/projects/2.png"
              alt="works 2"
              height={140}
              width={140}
              className="rounded-md object-cover max-w-fit flex-1"
            />
          </div>
          <Image
            src="/images/projects/1.png"
            alt="works 2"
            height={250}
            width={450}
            className="rounded-md object-cover !h-auto !w-full max-w-fit flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ProviderInfo;