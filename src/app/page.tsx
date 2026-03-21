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
      <div className="fixed bottom-0 left-0 right-0 h-21 bg-gray-950 border-t-2 border-gray-500 flex justify-center items-center">
        <div className="rounded-full bg-gray-950 w-14 h-14 bottom-5 right-5 border-b-3 border-gray-500 p-2 border flex justify-center text-4xl active:translate-y-0.5">
          <h1 className="absolute top-45/100 left-1/2 -translate-x-1/2 -translate-y-1/2">
            +
          </h1>
        </div>
      </div>
    </div>
  );
}
