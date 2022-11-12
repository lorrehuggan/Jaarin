import React from "react";

const StatusBar = () => {
  return (
    <div className="flex h-8 w-full items-center justify-between gap-2 bg-base-dark-200 px-4">
      <div>
        <div>
          <p className="text-sm">Liam H</p>
        </div>
      </div>
      <div>
        <div className="h-3 w-3 rounded-full bg-green-300"></div>
      </div>
    </div>
  );
};

export default StatusBar;
