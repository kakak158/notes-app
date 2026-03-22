"use client";
import React, { useRef } from "react";

const Page = () => {
  const title = useRef<HTMLTextAreaElement>(null);
  const text = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="max-w-screen text-white p-4 text-wrap h-screen">
      <textarea
        ref={title}
        className="w-full focus:outline-none text-4xl font-black resize-none overflow-hidden leading-tight mb-2"
        placeholder="Start typing here..."
        rows={1}
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = "auto";
          el.style.height = el.scrollHeight + "px";
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (text.current) text.current.focus();
          }
        }}
      />
      <textarea
        ref={text}
        className="w-full focus:outline-none text-lg resize-none leading-relaxed h-full"
        placeholder="Write your notes..."
        rows={1}
        onKeyDown={(e) => {
          if (
            e.key === "Backspace" &&
            (e.target as HTMLTextAreaElement).value === ""
          ) {
            e.preventDefault();
            if (title.current) title.current.focus();
          }
        }}
      />
    </div>
  );
};

export default Page;
