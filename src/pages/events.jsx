"use client";
import React from "react";
import "./../app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About us",
  description: "Generated by create next app",
};

export default function events({ children }) {
  return (
    <div className={inter.className}>
      <h1>Events</h1>
    </div>
  );
}