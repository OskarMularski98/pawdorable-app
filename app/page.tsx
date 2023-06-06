import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFF9F5] min-h-screen flex items-center justify-center">
      <form className=" flex flex-col gap-4 justify-center border w-[400px]">
        <div className=" flex justify-center">
          <img className="w-2/3" src="/logo-log-in.svg" alt="" />
        </div>
        <input
          className="py-4 px-6 shadow-lg rounded-3xl"
          type="text"
          placeholder="Username"
        />
        <input
          className="py-4 px-6 shadow-lg rounded-3xl"
          type="text"
          placeholder="Password"
        />
        <div className=" flex justify-center">
          <button className="bg-[#FF404D] p-[19px] w-1/2 mt-2 text-white rounded-[19px]">
            Sign in
          </button>
        </div>
        <div className=" flex justify-center">
          <div className="flex-col text-center">
            <div>Don't have account?</div>
            <div className=" text-[#FF404D]">Sing up!</div>
          </div>
        </div>
      </form>
    </div>
  );
}
