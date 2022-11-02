import React from "react";

const StatusBar = () => {
  return (
    <div className="flex h-12 w-full items-center gap-2 bg-base-dark-200 px-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px]">
        LH
      </div>
      <div>
        <p className="text-sm">Liam H</p>
      </div>
    </div>
  );
};

export default StatusBar;
