import AuthLayout from "@/components/AuthLayout/AuthLayout";
import { FileUpload } from "@/components/Forms/FileUpload";
import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import { CustomerIcon, ServiceProviderIcon } from "@/components/Icons";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import { Layout } from "@/components/Layout/Layout";
import SignupCompanyForm from "@/components/SignupCompanyForm/SignupCompanyForm";
import SignupCustomerForm from "@/components/SignupCustomerForm/SignupCustomerForm";
import SignupServiceForm from "@/components/SignupServiceForm/SignupServiceForm";
import SignupTabBar from "@/components/SignupTabBar/SignupTabBar";
import { fetchWord } from "@/lang/fetchWord";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import { LanguageContext } from "./../context/LangContext";

const tabs = ["customer", "service provider", "company"];
export default function Login() {
  const { lang } = useContext(LanguageContext);
  const [activeStage, setActiveStage] = useState("customer");
  const goNext = () => {
    let index = tabs.indexOf(activeStage);
    console.log(index);
    setActiveStage(tabs[index + 1]);
  };

  const displayTab = () => {
    switch (activeStage) {
      case "customer":
        return <SignupCustomerForm />;
      case "service provider":
        return <SignupServiceForm />;
      case "company":
        return <SignupCompanyForm />;
    }
  };
  const submit = () => { };
  return (
    <>
      <Head>
        <title>{fetchWord("register", lang)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout
        hideBottomMenu
        full
        pageTitle={`${fetchWord("create_your_account", lang)}`}
        description={fetchWord("have_account", lang)}
        link={
          <Link href={"/login"} className="text-secondary underline mx-1">
            {" "}
            {fetchWord("signin", lang)}
          </Link>
        }
      >
        <SignupTabBar setActiveStage={setActiveStage} activeStage={activeStage} />
        <div className="mt-2 px-4 flex flex-col w-full max-w-[500px]">
          {displayTab()}

          <Button
            classes="!bg-secondary !text-black !p-4 mt-4 rounded-none capitalize"
            onClick={() => {
              if (activeStage !== "company") goNext();
              else submit("");
            }}
          >

            {fetchWord("create_account", lang)}

          </Button>
          <Link
            href="/login"
            className=" text-gray-400 text-sm mt-8 text-center"
          >
            {fetchWord("or_sign_in", lang)}
          </Link>
        </div>
      </AuthLayout>
    </>
  );
}
