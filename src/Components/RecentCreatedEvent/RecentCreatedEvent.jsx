import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEvent from "./EachEvent";

const RecentCreatedEvent = () => {
  const { eventData, user } = useContext(AuthContext);
  //   console.log(eventData);
  return (
    <div>
      <div>
        <div className="divider divider-start divider-neutral text-[#447af4] text-lg font-semibold">
          Recent Created Events
        </div>
      </div>
      {eventData.map((eachevent) => {
        return <EachEvent eachevent={eachevent} key={eachevent.id} />;
      })}
    </div>
  );
};

export default RecentCreatedEvent;
