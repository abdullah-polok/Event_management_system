import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEventDetail from "./EachEventDetail";

const AllEvents = () => {
  const { eventData } = useContext(AuthContext);
  const [newEvent, setNewEvent] = useState([]);
  const [finishEvent, setFinishEvent] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  // Get today's date
  const today = new Date();

  // Extract the year, month, and date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 0-indexed: January is 0
  const currentDate = today.getDate();
  // console.log("Today date", currentYear, " ", currentMonth, " ", currentDate);

  useEffect(() => {
    const newEvents = [];
    const upcomingEvents = [];
    const finishedEvents = [];

    eventData.forEach((event) => {
      // Preprocess the date string to make it parsable
      const dataString = event.starttime.replace(" at", "");

      const dateObj = new Date(dataString);

      const year = dateObj.getFullYear();
      const month = dateObj.getMonth() + 1;
      const date = dateObj.getDate();
      // console.log("Database data", year, " ", month, " ", date);
      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth) ||
        (year === currentYear && month === currentMonth && date < currentDate)
      ) {
        finishedEvents.push(event);
      } else if (
        year === currentYear &&
        month === currentMonth &&
        date === currentDate
      ) {
        newEvents.push(event);
      } else if (
        year > currentYear ||
        (year === currentYear && month > currentMonth) ||
        (year === currentYear && month === currentMonth && date > currentDate)
      ) {
        upcomingEvents.push(event);
      }
    });

    setFinishEvent(finishedEvents);
    setUpcomingEvent(upcomingEvents);
    setNewEvent(newEvents);
  }, [eventData]);

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-base  text-[#1f97e6] [--tab-bg:#e0f2fe] [--tab-border-color:#1f97e6]"
          aria-label="New Events"
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#e0f2fe69] border-base-300 rounded-box p-2 mr-4 min-h-screen"
        >
          {newEvent.length > 0 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
              {newEvent.map((event) => (
                <EachEventDetail event={event} key={event.id} />
              ))}
            </div>
          ) : (
            <div className="text-center text-[#1f97e6] text-lg mt-4">
              <h1>No evemt found</h1>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-base text-[#64c729] [--tab-bg:#e7efd1] [--tab-border-color:#64c729]"
          aria-label="Upcoming Events"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#e7efd16e] border-base-300 rounded-box p-2 min-h-screen"
        >
          {upcomingEvent.length > 0 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
              {upcomingEvent.map((event) => (
                <EachEventDetail event={event} key={event.id} />
              ))}
            </div>
          ) : (
            <div className="text-center text-[#64c729] text-lg mt-4">
              <h1>No evemt found</h1>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-base text-[#b91c1c] [--tab-bg:#fee2e2] [--tab-border-color:#b91c1c]"
          aria-label="Finished Events"
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#fee2e270] border-base-300 rounded-box p-2 min-h-screen"
        >
          {finishEvent.length > 0 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
              {finishEvent.map((event) => (
                <EachEventDetail event={event} key={event.id} />
              ))}
            </div>
          ) : (
            <div className="text-center text-[#b91c1c] text-lg mt-4">
              <h1>No evemt found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

{
  /* <div role="tablist" className="tabs tabs-lifted ">
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
</div> */
}
