"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "admin") {
      console.log(user);
      router.push("/home");
    }
  };

  return (
    <div className="bg-[#FFF9F5] font-comfortaa min-h-screen flex items-center justify-center">
      <form className=" flex flex-col gap-4 justify-center w-[400px]">
        <div className=" flex justify-center">
          <img className="w-2/3" src="/logo-log-in.svg" alt="" />
        </div>
        <input
          className="py-4 px-6 mx-2 shadow-lg rounded-3xl"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
          value={user.username}
        />
        <input
          className="py-4 px-6 mx-2 shadow-lg rounded-3xl"
          type="text"
          placeholder="Password"
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          value={user.password}
        />
        <div className=" flex justify-center">
          <button
            onClick={submitHandler}
            className="bg-[#FF404D] text-center p-[19px] w-1/2 mt-2 text-white rounded-[19px]"
          >
            Sign in
          </button>
        </div>
        <div className=" flex justify-center">
          <div className="flex-col text-center">
            <div>Don't have account?</div>
            <button className=" text-[#FF404D]">Sign up!</button>
          </div>
        </div>
      </form>
    </div>
  );
}
