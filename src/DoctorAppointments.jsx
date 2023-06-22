export const DoctorAppointments = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="data">
        <div className="name">
          <p>Patient Name</p>
          {data.patient}
        </div>
        <div className="time">
          <p>time</p>
          {data.updatedAt}
        </div>
      </div>
      <div className="actions">
        <div className="accept">
          <button
            onClick={() => {
              //accept function
            }}
          >
            accept
          </button>
        </div>
        <div className="cancel">
          <button
            onClick={() => {
              //cancel function
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
