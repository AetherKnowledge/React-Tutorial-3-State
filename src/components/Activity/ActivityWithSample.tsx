import Activity from "./Activity";

const ActivityWithSample = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <Activity />
      <div className="flex flex-col gap-5 items-center justify-center p-6 w-full">
        <img
          src="/sample1.png"
          alt="Activity Sample"
          className="w-96 h-auto rounded-lg shadow-lg"
        />
        <img
          src="/sample2.png"
          alt="Activity Sample"
          className="w-96 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ActivityWithSample;
