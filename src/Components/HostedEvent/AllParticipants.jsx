import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
const AllParticipants = () => {
  const { participant } = useContext(AuthContext);
  const paramId = useParams();
  console.log(paramId.id);
  const eventIdFilter = participant.filter(
    (event) => event.eventId === paramId.id
  );

  return (
    <div className=" min-h-screen">
      {eventIdFilter && eventIdFilter.length > 0 ? (
        eventIdFilter.map((event, index) => (
          <div key={index}>
            <div className="mt-4 bg-[#1c73f3] text-white rounded-xl px-3 py-4 flex items-center gap-4">
              <div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="rounded-lg"
                      src={
                        event.userphoto
                          ? event.userphoto
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1>{event.username}</h1>
                <h1>{event.useremail}</h1>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#1c73f3] text-center text-lg font-semibold mt-4">
          No participants found
        </p>
      )}
    </div>
  );
};

export default AllParticipants;
