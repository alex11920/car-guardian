import Calendar from "/src/assets/icons/calender.png";
import Call from "/src/assets/icons/call.png";
import Map from "/src/assets/icons/map.png";
const ReminderBanner = () => {
  return (
    <div className="card w-full bg-sec-color text-primary-content my-32">
      <div className="card-body py-24">
        <div className="flex items-center text-white justify-evenly">
          {/* time */}
          <div className="flex items-center gap-5">
            <img src={Calendar} />
            <div className="font-medium space-y-2">
              <p className="font-medium">We are open monday-friday</p>
              <h2 className="text-3xl font-bold">7:00 am - 9:00 pm</h2>
            </div>
          </div>
          {/* helpline */}
          <div className="flex items-center gap-5">
            <img src={Call} />
            <div className="space-y-2">
              <p className="font-medium">Have a question?</p>
              <h2 className="text-3xl font-bold">+2546 251 2658</h2>
            </div>
          </div>
          {/* map */}
          <div className="flex items-center gap-5">
            <img src={Map} />
            <div className="space-y-2">
              <p className="font-medium">Need a repair? our address</p>
              <h2 className="text-3xl font-bold">Liza Street, New York</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderBanner;
