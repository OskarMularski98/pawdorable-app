import React from "react";

const FormComponent = ({
  setUser,
  username,
  password,
  submitHandler,
  emailRequired,
  email,
}) => {
  return (
    <form className=" flex flex-col gap-4 justify-center w-[400px]">
      <div className=" flex justify-center">
        <img className="w-2/3" src="/logo.svg" alt="" />
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
        value={username}
      />
      {emailRequired && (
        <input
          className="py-4 px-6 mx-2 shadow-lg rounded-3xl"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          value={email}
        />
      )}
      <input
        className="py-4 px-6 mx-2 shadow-lg rounded-3xl"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUser((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
        value={password}
      />
      <div className=" flex justify-center">
        <button
          onClick={submitHandler}
          className="bg-[#FF404D] text-center p-[19px] w-1/2 mt-2 text-white rounded-[19px]"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
