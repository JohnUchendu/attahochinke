import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Intellectual property law service |Attah Ochinke and Co. ",
  description:
    "Expert Intellectual property services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Attah Ochinke and Co.",
};

const IntellectualProperty = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Intellectual Property Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Protecting Your Innovations and Creative Works
        </h2>
        <p className="mt-2 text-gray-600">
          At Attah Ochinke and Co., we help businesses and individuals secure and
          enforce their intellectual property rights. Our legal team specializes
          in trademarks, copyrights, patents, and trade secrets, ensuring our
          clients maintain exclusive control over their innovations and brand
          assets.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Intellectual Property Law Matters?
        </h2>
        <p className="mt-2 text-gray-600">
          Intellectual property (IP) is a valuable asset for businesses and
          creatives. Unauthorized use or infringement can lead to financial
          losses, brand dilution, and competitive disadvantages. Proper IP
          protection safeguards your work, ensuring legal exclusivity and
          monetization rights
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Trademark Registration & Enforcement</strong>
            Securing brand identity through trademark filings, renewals, and
            litigation against infringers.
          </li>
          <li>
            <strong>Patent Protection & Licensing</strong>
            Assisting inventors in patent applications, licensing agreements,
            and infringement cases.
          </li>
          <li>
            <strong>Copyright Law & Creative Rights</strong>
            Protecting original works, including literature, music, software,
            and artistic creations.
          </li>
          <li>
            <strong>Trade Secrets & Confidentiality Agreements </strong>
            Safeguarding proprietary business information through legally
            binding agreements.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We provide expert legal guidance in securing, enforcing, and
          monetizing intellectual property rights, ensuring our clients maintain
          a competitive edge in their industries.
        </p>
      </div>
    </>
  );
};

export default IntellectualProperty;
