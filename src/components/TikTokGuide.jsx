import React from 'react';

const TikTokGuide = () => {
  const tips = [
    "Post consistently to keep your audience engaged.",
    "Use trending hashtags and sounds to increase visibility.",
    "Engage with your audience by responding to comments.",
    "Collaborate with other TikTok creators to expand your reach.",
    "Create high-quality, visually appealing content.",
    "Leverage storytelling and relatable content.",
    "Optimize your posting times based on audience activity.",
    "Use analytics to refine your strategy."
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        How to Get Likes & Followers on TikTok
      </h2>
      <p className="text-gray-600 mb-4">
        Follow these proven strategies to boost your TikTok presence and grow your followers:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TikTokGuide;