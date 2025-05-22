import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Corporate Law Services | Attah Ochinke and Co.",
  description:
    "Expert corporate legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Attah Ochinke and Co.",
};

const CorporateLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Corporate Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Expert Corporate Legal Services in Nigeria
        </h2>
        <p className="mt-2 text-gray-600">
          Attah Ochinke and Co. provides comprehensive corporate legal services,
          ensuring businesses operate within the legal framework while
          optimizing their operations. We help clients navigate complex
          regulations, mergers, acquisitions, and compliance matters. Our legal
          team is dedicated to offering innovative solutions that support
          corporate growth and stability.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Corporate Law Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Corporate law is the backbone of any business entity. Whether you're
          launching a startup, expanding internationally, or restructuring your
          company, compliance with Nigerian corporate regulations is essential.
          Failure to adhere to legal requirements can result in penalties, loss
          of business opportunities, or litigation.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Business Formation & Structuring</strong> – Guidance on
            choosing the right business entity and structuring operations for
            tax and legal efficiency.
          </li>
          <li>
            <strong>Corporate Governance & Compliance</strong> – Ensuring
            businesses adhere to regulatory requirements, board governance best
            practices, and corporate policies.
          </li>
          <li>
            <strong>Mergers & Acquisitions</strong> – Legal support for mergers,
            acquisitions, due diligence, and contract negotiations.
          </li>
          <li>
            <strong>Regulatory Approvals & Licensing</strong> – Assistance in
            obtaining the necessary business permits and regulatory approvals.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We provide strategic legal solutions tailored to your business needs,
          ensuring full compliance and risk management. Our corporate law
          experts offer sound legal advice to protect your company's interests
          and help you achieve sustainable growth.
        </p>
      </div>
    </>
  );
};

export default CorporateLaw;
