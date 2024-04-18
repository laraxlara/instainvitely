// import axios from "axios";
// import { AiFillGithub } from "react-icons/ai";
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { useCallback, useState } from "react";
// import { toast } from "react-hot-toast";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import useRegisterModal from "@/hooks/useRegisterModal";
// import useAuthStore from "@/state/useAuthStore";
// import { AuthState } from "@/state/useAuthStore";
// import { User } from "@prisma/client";

// import Modal from "./Modal";
// import Input from "../input/Input";
// import ButtonOutlined from "../buttons/ButtonOutlined";

// const RegisterModal = () => {
//   const registerModal = useRegisterModal();
//   const registerUser = useAuthStore((state) => state.registerUser);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FieldValues>({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//   //   setIsLoading(true);

//   //   try {
//   //     const response = await axios
//   //       .post("/auth/register", data)
//   //       .then(() => {
//   //         toast.success("Registered!");
//   //         registerModal.onClose();
//   //         // loginModal.onOpen();
//   //         console.log(response);
//   //       })
//   //       .catch((error) => {
//   //         toast.error(error);
//   //         console.log(error);
//   //       })
//   //       .finally(() => {
//   //         setIsLoading(false);
//   //       });
//   //   } catch (error) {
//   //     console.error("Error registering user:", error);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     setIsLoading(true);

//     axios
//       .post("/api/auth/register", data)
//       .then(() => {
//         toast.success("Registered!");
//         registerModal.onClose();
//         // loginModal.onOpen();
//       })
//       .catch((error) => {
//         toast.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   const onToggle = useCallback(() => {
//     registerModal.onClose();
//   }, [registerModal]);

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <Input
//         id="email"
//         label="Email"
//         type="email"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//       <Input
//         id="name"
//         label="Name"
//         type="text"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//       <Input
//         id="password"
//         label="Password"
//         type="password"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//     </div>
//   );

//   const footerContent = (
//     <div className="flex flex-col gap-4 mt-3">
//       <hr />
//       <ButtonOutlined
//         label="Continue with Google"
//         icon={FcGoogle}
//         onClick={() => signIn("google")}
//       />
//       <div
//         className="
//           text-neutral-500
//           text-center
//           mt-4
//           font-light
//         "
//       >
//         <p>
//           Already have an account?
//           <span
//             onClick={onToggle}
//             className="
//               text-neutral-800
//               cursor-pointer
//               hover:underline
//             "
//           >
//             {" "}
//             Log in
//           </span>
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <Modal
//       disabled={isLoading}
//       isOpen={registerModal.isOpen}
//       title="Register"
//       actionLabel="Continue"
//       onClose={registerModal.onClose}
//       onSubmit={handleSubmit(onSubmit)}
//       body={bodyContent}
//       footer={footerContent}
//     />
//   );
// };

// export default RegisterModal;
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../input/Input";
import ButtonOutlined from "../buttons/ButtonOutlined";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  // const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    axios
      .post("/api/auth/register", data)
      .then(() => {
        toast.success("Registered!");
        registerModal.onClose();
        // loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = useCallback(() => {
    registerModal.onClose();
    // loginModal.onOpen();
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <ButtonOutlined
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
