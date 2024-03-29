import { LanguageContext } from "@/context/LangContext";
import { serviceProviders, services } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import CustomSelectField from "../Forms/CustomSelectField";
import { InputField } from "../Forms/InputField";
import { Button } from "../Global/Button/Button";
import { TimeCheckIcon } from "../Icons";
import { PlusIcon, WorldIcon } from "../Icons";
import Modal from "../Modal/Modal";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

const RequestServicesForm = ({ getValues, setSelectedTab, inModal }) => {
  const { lang } = useContext(LanguageContext);
  const [serviceName, setServiceName] = useState("");
  const [location, setLocation] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [openPaymentForm, setOpenPaymentForm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    getValues({
      serviceName,
      location,
      selectCategory,
      selectTime,
      selectDate,
      creditCard,
      cvv,
      name,
      expirationDate,
    });
    if(!!setSelectedTab)
      setSelectedTab(1);
  };

  return (
    <>
      <Modal
        open={openPaymentForm}
        close={() => setOpenPaymentForm(false)}
        containerClassName="!items-end z-20 max-w-[575px] !justify-center"
        contentBoxClassName="relative !overflow-visible max-w-[90%] !rounded-none pt-12"
      >
        <h2 className="bg-primary text-white text-center text-xl capitalize shadow-md p-6 rounded-3xl -top-9 left-0 absolute w-full">
          {fetchWord("credit_card", lang)}
        </h2>
        <InputField
          label={fetchWord("name", lang)}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          classes="!py-3"
          placeholder="Khaled mohammed"
        />
        <InputField
          label={fetchWord("credit_card_number", lang)}
          name="creditCard"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          classes="!py-3"
          placeholder="92839239237923"
        />
        <div className="flex gap-2 w-full">
          <InputField
            label={fetchWord("expiration_date", lang)}
            name="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            classes="!py-3 w-full"
            placeholder="Y/M"
          />
          <InputField
            label={fetchWord("cvv", lang)}
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            classes="!py-3"
            placeholder="***"
          />
        </div>
        <Button classes="w-full font-medium mt-8">
          {fetchWord("confirmation_payment", lang)}
        </Button>
      </Modal>
      <form onSubmit={onSubmit}>
        <InputField
          label={fetchWord("service_name", lang)}
          name="serviceName"
          placeholder={fetchWord("service_name_placeholder", lang)}
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          classes="!py-3 placeholder:text-xs"
          labelClassName="!text-black"
        />
        <CustomSelectField
          label={fetchWord("select_category", lang)}
          name="selectCategory"
          value={selectCategory}
          list={services}
          onChange={(e) => setSelectCategory(e.target.value)}
          labelClassName="!text-black"
        />
        <InputField
          label={fetchWord("location", lang)}
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          classes="!py-3 !bg-white"
          iconEnd={<WorldIcon />}
          labelClassName="!text-black"
        />
        <InputField
          type="datetime-local"
          label={fetchWord("select_date", lang)}
          name="selectDate"
          value={selectDate}
          onChange={(e) => setSelectDate(e.target.value)}
          placeholder={fetchWord("select_date_placeholder", lang)}
          iconStart={<TimeCheckIcon />}
          labelClassName="!text-black"
        />

        <h3 className="text-base mt-4 mb-2">
          {fetchWord("payment_method", lang)}{" "}
        </h3>
        <PaymentMethods
          onPaymentClick={() => setOpenPaymentForm(true)}
          showInputs
          containerClassName="justify-around mb-4"
        />
        {
          inModal ? null : (
            <div className="h-32 -mx-4 bg-[#f2f2f2]" />

          )
        }
        <div className={` bottom-0 left-0 w-full max-w-[575px] p-4 ${inModal ? '' : 'fixed bg-[#f2f2f2]'}`}>
          <Button
            classes="w-[270px] py-3 text-sm !w-full block "
            onClick={() => {
              if (setSelectedTab) {
                setSelectedTab(3)
              }
            }}
          >
            {fetchWord(inModal ? 'confirm' : "next", lang)}{" "}
          </Button>
        </div>
      </form>
    </>
  );
};

export default RequestServicesForm;
