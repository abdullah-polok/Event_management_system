import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachEvent from "./EachEvent";

const RecentCreatedEvent = () => {
  const { eventData, user } = useContext(AuthContext);

  ///filter created data by specific user

  const filterEventData = eventData.filter(
    (event) => event.email === user?.email
  );

  return (
    <div>
      <div>
        <div className="divider divider-start divider-neutral text-[#447af4] text-lg font-semibold overflow-y-hidden overflow-hidden">
          Recent Created Events
        </div>
      </div>
      {filterEventData.map((eachevent) => {
        return <EachEvent eachevent={eachevent} key={eachevent.id} />;
      })}
    </div>
  );
};

export default RecentCreatedEvent;
