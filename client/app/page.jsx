"use client";
import React, { useState, useEffect } from "react";
import StockDetails from "@components/StockDetails";
import LiveStock from "@components/LiveStock";
import Stock from "@components/Stock";

export default function Home() {
  return (
    <div>
      {/* <StockDetails> </StockDetails> */}
      {/* <LiveStock></LiveStock> */}
      <Stock></Stock>
    </div>
  );
}
