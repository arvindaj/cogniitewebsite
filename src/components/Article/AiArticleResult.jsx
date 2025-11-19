import FrameScreen from "../../assets/Images/Article/Frame 29.svg";
import ShareSection from "./ShareSection";


const AiArticleResult = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">

      {/* --- TITLE --- */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Afterword: The AI Behind This Article
      </h1>

      {/* --- CARD (Screenshot Look) --- */}
      <div className="w-full bg-white  overflow-hidden mb-5">
        <img
          src={FrameScreen}
          alt="AI tool screenshot"
          className="w-full object-cover"
        />
      </div>

      <ShareSection />

    </div>
  );
};

export default AiArticleResult