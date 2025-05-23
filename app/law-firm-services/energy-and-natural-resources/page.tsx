import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Commercial law service | Attah Ochinke and Co. ",
  description:
    "Expert corporate legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Attah Ochinke and Co.",
};

const EnergyandNaturalResourcesLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Energy & Natural Resources Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Solutions for the Energy Sector
        </h2>
        <p className="mt-2 text-gray-600">
          The energy and natural resources sector is one of the most regulated
          industries in Nigeria. Attah Ochinke and Co. provides specialized legal
          services to oil, gas, and renewable energy companies, ensuring
          compliance and smooth project execution.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Energy Law Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Energy companies face complex regulatory frameworks, contractual
          obligations, and environmental compliance requirements. Legal guidance
          is crucial for mitigating risks and ensuring project success.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Oil & Gas Contracts</strong>
            Drafting and negotiating agreements for exploration, production, and
            distribution.
          </li>
          <li>
            <strong>Energy Regulations & Compliance</strong>
            Ensuring businesses adhere to government policies and environmental
            regulations.
          </li>
          <li>
            <strong>Renewable Energy Projects </strong>
            Providing legal guidance for solar, wind, and hydro projects.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We help businesses navigate the regulatory environment and maximize
          investment returns while ensuring compliance with industry standards.
        </p>
      </div>
    </>
  );
};

export default EnergyandNaturalResourcesLaw;
