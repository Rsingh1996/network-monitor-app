import React from "react";
import HostStatus from "./components/HostStatus";
import Title from "./components/Title";
import Footer from "./components/Footer";
import hosts from "./hosts";

export default function App() {
  return (
    <div className="App">
      <Title />
      {hosts.map((hosts, index) => {
        return (
          <HostStatus
            key={hosts.index}
            store={hosts.store}
            ip={hosts.ip}
            location={hosts.location}
          />
        );
      })}
      <Footer />
    </div>
  );
}
