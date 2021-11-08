import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <p className="text-3xl text-black">
          Sorry, the page you are looking for does not exist.
        </p>
        <img
          src="https://oc-images.imgix.net/error/error_404.svg?v=2&auto=compress,format&q=80&dpr=1"
          alt="404"
        />
      </div>
    </div>
  );
}
