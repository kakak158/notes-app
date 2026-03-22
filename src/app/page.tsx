import { Lineicons } from "@lineiconshq/react-lineicons";
import { Home2Outlined } from "@lineiconshq/free-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-screen min-h-screen text-white p-4 flex-col justify-between pb-25">
      {/* <div className="fixed rounded-full bg-gray-950 w-14 h-14 bottom-5 right-5 border-b-3 border-gray-500 p-2 border flex justify-center text-4xl active:translate-y-0.5">
        <h1 className="absolute top-45/100 left-1/2 -translate-x-1/2 -translate-y-1/2">
          +
        </h1>
      </div> */}
      <div className="grid grid-cols-1 gap-4">
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
        <div className="border-b-3 border-gray-500 p-2 pb-2 border rounded-xl bg-gray-950 active:translate-y-0.5">
          <h1 className="text-2xl font-black">My Note</h1>
          <p className="text-gray-400 font-semibold">
            This is a note that talks about different thi...
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-21 bg-gray-950 border-t-2 border-gray-500 flex items-center justify-between px-16">
        <button className="flex items-center justify-center w-12 h-12 scale-125 rounded-2xl border border-gray-700 active:scale-95 transition">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 2.5C5.50736 2.5 4.5 3.50736 4.5 4.75V6.75H3.25C2.83579 6.75 2.5 7.08579 2.5 7.5C2.5 7.91421 2.83579 8.25 3.25 8.25H4.5V11.75H3.25C2.83579 11.75 2.5 12.0858 2.5 12.5C2.5 12.9142 2.83579 13.25 3.25 13.25H4.5V16.75H3.25C2.83579 16.75 2.5 17.0858 2.5 17.5C2.5 17.9142 2.83579 18.25 3.25 18.25H4.5V20.25C4.5 21.4926 5.50736 22.5 6.75 22.5H17.25C18.4926 22.5 19.5 21.4926 19.5 20.25V4.75C19.5 3.50736 18.4926 2.5 17.25 2.5H6.75ZM7.5 17.5C7.5 17.9142 7.16421 18.25 6.75 18.25C6.33579 18.25 6 17.9142 6 17.5C6 17.0858 6.33579 16.75 6.75 16.75C7.16421 16.75 7.5 17.0858 7.5 17.5ZM7.5 7.5C7.5 7.91421 7.16421 8.25 6.75 8.25C6.33579 8.25 6 7.91421 6 7.5C6 7.08579 6.33579 6.75 6.75 6.75C7.16421 6.75 7.5 7.08579 7.5 7.5ZM7.5 12.5C7.5 12.9142 7.16421 13.25 6.75 13.25C6.33579 13.25 6 12.9142 6 12.5C6 12.0858 6.33579 11.75 6.75 11.75C7.16421 11.75 7.5 12.0858 7.5 12.5Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center w-12 h-12 scale-125 rounded-2xl border border-gray-700 active:scale-95 transition text-4xl">
          <h1 className="absolute top-45/100 left-1/2 -translate-x-1/2 -translate-y-1/2">
            +
          </h1>
        </button>
        <button className="flex items-center justify-center w-12 h-12 scale-125 rounded-2xl border border-gray-700 active:scale-95 transition">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 2.5C5.50736 2.5 4.5 3.50736 4.5 4.75V6.75H3.25C2.83579 6.75 2.5 7.08579 2.5 7.5C2.5 7.91421 2.83579 8.25 3.25 8.25H4.5V11.75H3.25C2.83579 11.75 2.5 12.0858 2.5 12.5C2.5 12.9142 2.83579 13.25 3.25 13.25H4.5V16.75H3.25C2.83579 16.75 2.5 17.0858 2.5 17.5C2.5 17.9142 2.83579 18.25 3.25 18.25H4.5V20.25C4.5 21.4926 5.50736 22.5 6.75 22.5H17.25C18.4926 22.5 19.5 21.4926 19.5 20.25V4.75C19.5 3.50736 18.4926 2.5 17.25 2.5H6.75ZM7.5 17.5C7.5 17.9142 7.16421 18.25 6.75 18.25C6.33579 18.25 6 17.9142 6 17.5C6 17.0858 6.33579 16.75 6.75 16.75C7.16421 16.75 7.5 17.0858 7.5 17.5ZM7.5 7.5C7.5 7.91421 7.16421 8.25 6.75 8.25C6.33579 8.25 6 7.91421 6 7.5C6 7.08579 6.33579 6.75 6.75 6.75C7.16421 6.75 7.5 7.08579 7.5 7.5ZM7.5 12.5C7.5 12.9142 7.16421 13.25 6.75 13.25C6.33579 13.25 6 12.9142 6 12.5C6 12.0858 6.33579 11.75 6.75 11.75C7.16421 11.75 7.5 12.0858 7.5 12.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
