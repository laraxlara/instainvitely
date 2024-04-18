import React from "react";
import ContactForm from "@/components/forms/ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="py-24 bg-[#B0BDAB]">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto md:grid-cols-2">
        <div className="py-6 px-2 md:py-0 md:px-6 px-4">
          <h1 className="text-5xl font-bold text-[#626262]">Get in touch</h1>
          <p className="pt-2 pb-4 text-[#626262]">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-4">
            <p className="flex items-center text-[#626262]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail mr-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
