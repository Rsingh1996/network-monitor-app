import React, { useState } from "react";
import ping from "ping";
const HostStatus = ({ ip, store, location, key }) => {
  const [status, setStatus] = useState(false);

  ping.sys.probe(ip, function (isAlive) {
    if (isAlive) setStatus(true);
    console.log(status);
  });
  var hosts = ["192.168.1.1", "google.com", "yahoo.com"];
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive) {
      var msg = isAlive
        ? "host " + host + " is alive"
        : "host " + host + " is dead";
      console.log(msg);
    });
  });

  return (
    <div className="container">
      <div className="row" key={key}>
        <div
          className="col-2 color-status m-2"
          style={{ backgroundColor: status ? "green" : "red" }}
        ></div>
        <div className="col m-2">{store}</div>
        <div className="col m-2">{ip}</div>
        <div className="col m-2">{location}</div>
      </div>
    </div>
  );
};
export default HostStatus;
