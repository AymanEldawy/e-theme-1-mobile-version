import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

import { Button } from "../Global/Button/Button";
import { EditIcon, ElectricCategoryIcon, WorldIcon } from "../Icons";

const RequestServicesConfirmation = ({
  setSelectedTab,
  setOpenFormFeedback,
  layout,
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="">
      <div className="flex flex-col gap-5 p-4 py-8 rounded-md">
        <h3 className="text-lg font-medium capitalize items-center flex justify-between">
          Air conditioner transistor repair confirm and send
          {layout === "view" ? null : (
            <button
              onClick={() => setSelectedTab(2)}
              className="ltr:ml-auto rtl:mr-auto scale-75 cursor-pointer"
            >
              <EditIcon />
            </button>
          )}
        </h3>
        <p className="text-lead text-sm">30 Nov , 2022 - :30 PM</p>
        <div className="flex gap-2 items-center">
          <ElectricCategoryIcon />
          <Link href="/" className="text-primary font-medium capitalize">
            Electrical Devices
          </Link>
          {layout === "view" ? null : (
            <button
              onClick={() => setSelectedTab(2)}
              className="ltr:ml-auto rtl:mr-auto scale-75 cursor-pointer"
            >
              <EditIcon />
            </button>
          )}
        </div>
        <p className="flex gap-2 items-center">
          <WorldIcon />
          Istanbul - turky - 3rd floor alradwan
        </p>
        <h3 className="font-medium capitalize">
          {fetchWord("description", lang)}
        </h3>
        <p className="text-lead text-sm">
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
        </p>
        <h3 className="font-medium capitalize">{fetchWord("photo", lang)}</h3>
        <div className="flex flex-wrap gap-4">
          <Image
            src="/images/18571126_303.png"
            alt="product Images"
            width={200}
            height={180}
          />
          <Image
            src="/images/18571126_303.png"
            alt="product Images"
            width={200}
            height={180}
          />
        </div>
      </div>
      <div className="bg-[#f2f2f2] -mx-4 h-32" />
      {layout === "view" ? null : (
        <div className="bg-[#f2f2f2] fixed bottom-0 left-0 w-full max-w-[575px] p-4">
          <Button
            onClick={() => setSelectedTab(5)}
            classes="w-[300px] !p-3 mx-auto block"
          >
            {fetchWord("confirm_send", lang)}{" "}
          </Button>
        </div>
      )}
    </div>
  );
};

export default RequestServicesConfirmation;
