import React from 'react';

function HeroGraph() {
  return (
    <div className="heroGraph-container w-full p-4 flex gap-4">
      <div className="currentDownload-bar-graph flex bg-red-100 flex-col p-4 rounded-lg gap-8">
        <div className="currentDownload-text font-semibold  text-md ">
          Current Download
        </div>
        <div className="circular-graph  ">Circular Graph</div>
      </div>
      <div className="areaInstalled-graph-container w-full bg-slate-100 rounded-xl p-4 ">
        <div className="areaInstalledContainer w-full flex  justify-between     ">
          <div className="areaInstalled-text capitalize font-semibold ">
            Area Installed
          </div>
          <options className="areaInstalled-text  font-bold  text-sm">
            value
          </options>
        </div>
      </div>
    </div>
  );
}

export default HeroGraph;
