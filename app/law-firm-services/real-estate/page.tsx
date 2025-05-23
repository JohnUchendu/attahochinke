import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Real estate law service | Attah Ochinke and Co. ",
  description:
    "Expert real estate legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Attah Ochinke and Co.",
};

const RealEstate = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Real Estate Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Expertise in Property Transactions and Real Estate Development
        </h2>
        <p className="mt-2 text-gray-600">
          Attah Ochinke and Co. provides legal services in real estate transactions,
          property acquisitions, lease agreements, land use, and development
          projects. Our firm ensures that real estate dealings comply with
          Nigerian property laws while safeguarding our clients’ investments.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Real Estate Law Matters?
        </h2>
        <p className="mt-2 text-gray-600">
          Real estate investments require thorough legal scrutiny to avoid
          disputes, fraud, and regulatory issues. Whether buying, selling,
          leasing, or developing property, legal expertise is essential to
          ensure a seamless process and avoid litigation.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Property Acquisition & Sales</strong>
            Assisting individuals and businesses in purchasing and selling real
            estate properties.
          </li>
          <li>
            <strong>Lease & Tenancy Agreements</strong>
            Drafting and reviewing lease contracts for residential, commercial,
            and industrial properties.
          </li>
          <li>
            <strong> Real Estate Development & Land Use</strong>
            Providing legal support for large-scale developments, zoning laws,
            and land use regulations.
          </li>
          <li>
            <strong>Mortgage & Financing Agreements</strong>
            Structuring legal frameworks for property financing, including
            mortgages and loans.
          </li>
          <li>
            <strong>Title Verification & Due Diligence</strong>
            Conducting thorough legal checks to verify property ownership and
            prevent land disputes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We help clients navigate the complexities of real estate transactions
          with strategic legal advice, ensuring compliance, security, and
          profitability in every deal.
        </p>
      </div>
    </>
  );
};

export default RealEstate;
