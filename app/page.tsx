"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormComponent from "@/components/FormComponent";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [username, setUsername] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.username === "admin" && user.password === "admin") {
      router.push("/home");
    }
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen flex flex-col gap-4 items-center justify-center">
      {hasAccount ? (
        <FormComponent
          setUser={setUser}
          username={user.username}
          password={user.password}
          submitHandler={submitHandler}
        />
      ) : (
        <FormComponent
          setUser={setUser}
          username={user.username}
          password={user.password}
          emailRequired={true}
          email={user.email}
          submitHandler={submitHandler}
        />
      )}
      <div className=" flex justify-center">
        <div className="flex-col text-center">
          <div>
            {hasAccount ? `Don't have account?` : `You already has account?`}
          </div>
          <button
            onClick={() => setHasAccount(!hasAccount)}
            className=" text-[#FF404D]"
          >
            {hasAccount ? "Sign up!" : "Sign in!"}
          </button>
        </div>
      </div>
    </div>
  );
}
