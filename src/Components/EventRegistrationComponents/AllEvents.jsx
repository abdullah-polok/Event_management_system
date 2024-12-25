import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  // console.log(eventData);
  return (
    <div>
      <div>
        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className=" tab text-base  text-[#1f97e6] [--tab-bg:#e0f2fe] [--tab-border-color:#1f97e6]"
            aria-label="Tab 1"
          />
          <div role="tabpanel" className="tab-content p-10">
            New Events
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-base text-[#64c729] [--tab-bg:#e7efd1] [--tab-border-color:#64c729]"
            aria-label="Tab 2"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            Upcoming Events
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab  text-base text-[#b91c1c] [--tab-bg:#fee2e2] [--tab-border-color:#b91c1c]"
            aria-label="Tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            Finished Events
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center">
        {eventData.map((event) => (
          <EachEventDetail event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
