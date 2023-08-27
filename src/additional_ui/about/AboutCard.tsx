import React from "react";

const AboutCard = ({ title, subtitle, description }: {title: string, subtitle: string, description: string}) => {
  return (
    <div className="space-y-4 bg-gray-100 p-4 rounded-lg ">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-md text-blue-600">{subtitle}</h4>
      </div>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};
export default AboutCard;
