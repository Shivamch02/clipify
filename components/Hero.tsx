import { Input } from "./Input";
export const Hero = () => {
  return (
    <div className="pb-10 h-screen">
      <div className="flex justify-center py-10 flex-col items-center xl:px-48 lg:px-24 md:px-10 px-4">
        <button className="bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 sm:px-4 px-2 py-1">
          Universal video downloader ✨
        </button>
        <div className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-bold text-white text-center mt-10">
          Clipify - Seamlessly Save Your{" "}
          <span className="text-blue-600">Favorite</span> Clips!
        </div>
        <div>
          <p className="text-gray-300 text-center mt-5 xl:px-40 lg:36 text-lg">
            Download videos online effortlessly by pasting the link, choosing
            quality, and clicking download instantly.
          </p>
        </div>
      </div>
      <div className="gap-4 mt-10 flex sm:flex-row flex-col xl:px-40 lg:px-32 md:px-20 w-full justify-center items-center">
        <div className="sm:w-[70%] w-full">
          <Input placeholder="Enter Video Url" type={"text"} />
        </div>
        <div className="sm:w-[30%] w-full">
          <button className="bg-black text-white xl:text-lg lg:text-md font-semibold rounded-full px-4 py-2 text-center w-full">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};
