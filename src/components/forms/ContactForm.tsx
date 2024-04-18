import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import ButtonOutlined from "../buttons/ButtonOutlined";
import Input from "./Input";
import Textarea from "./Textarea";
import Error from "./Error";
import Success from "./Success";
import Loader from "./Loader";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("api/contact/contact", data);

      console.log(data);
      if (response) {
        setSent(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setError(false);
  };

  return (
    <>
      {error ? <Error /> : null}
      {loading ? (
        <>
          <Loader />
        </>
      ) : sent && !error && !loading ? (
        <>
          <Success />
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <label className="flex flex-col gap-2">
              <span className="my-2">Full name</span>
              <Input
                id="name"
                type="text"
                register={register("name")}
                onChange={handleInputChange}
                placeholder="Your Full Name"
              />
              {errors.name && (
                <span>This field is required. {errors.name?.message}</span>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <span className="my-2">Email address</span>
              <Input
                id="email"
                type="email"
                register={register("email")}
                onChange={handleInputChange}
                placeholder="example@gmial.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="my-2">Message</span>
              <Textarea
                id="message"
                type="text"
                rows={7}
                register={register("message")}
                onChange={handleInputChange}
                placeholder="Your Message"
              />
            </label>
            <div className="mt-4">
              <ButtonOutlined type="submit" label="SEND MESSAGE" />
            </div>
          </form>
        </>
      )}
    </>
  );
}
