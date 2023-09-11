import React, { useState } from "react";
import { useEffect } from "react";
import protobuf from "protobufjs";
import axios from "axios";

const LiveStock = (props) => {
  useEffect(() => {
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");

    protobuf.load("YPricingData.proto", (err, root) => {
      if (err) {
        return console.log("Hey Neer");
      }

      const name = props.name + ".NS";
      console.log(name);

      const Yaticker = root.lookupType("yaticker");
      ws.onopen = function open() {
        console.log("connected");
        ws.send(
          JSON.stringify({
            subscribe: [name],
          })
        );
      };

      ws.onclose = function close() {
        console.log("disconnected");
      };

      ws.onmessage = function incoming(data) {
        console.log("comming message");
        console.log(Yaticker.decode(new Buffer(data.data, "base64")));

        // console.log(data.data);
        // console.log(Yaticker.decode(new Buffer(data.data, "base64")));
        if (props.flag) ws.close();
      };
    });
  });

  return (
    <div>
      {/* {showDropdown && (
        
      )} */}
      {/* {!showDropdown && <button onClick={closeLiveStock}>Close</button>} */}
    </div>
  );
};

export default LiveStock;
