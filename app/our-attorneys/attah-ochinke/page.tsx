"use client";

import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const KennethBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/our-attorneys/attahochinke.jpeg"
            alt="Attah Ochinke"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Attah Ochinke</h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          Principal Partner
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Attah was Attorney General Cross River State (2010 - 2015) and is a member of the
            Nigerian Bar Association NBA.
            <br />
            His recent academic journey at the London School of Economics
            studying Real Estate Economics and Finance! The program provided
            in-depth insights into international real estate dynamics, pushing
            me to enhance my mathematical skills and Excel proficiency. <br />
            Sacrifices were made, including giving up my cherished morning
            exercise sessions, to ensure a thorough understanding of the course
            material.
            <br /> Proud to announce the successful completion with 73.4% grade
            average! The experience was challenging yet rewarding. Grateful for
            the opportunity. The experience was challenging yet rewarding.
            Grateful for the opportunity. LSE has extended an invitation to join
            the Public Policy Analysis course at a discount.
            <br />
            <br /> He has variously applied his skills and expertise to the
            betterment of his clients’ businesses. He therefore, possess vast
            degree of commercial law experiences which he will deploy to our
            clients’ advantage.
          </p>
        </div>

     
      </div>
      <Testimonials />
    </div>
  );
};

export default KennethBio;
