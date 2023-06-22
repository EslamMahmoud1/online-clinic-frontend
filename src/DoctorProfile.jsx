import { DoctorAppointments } from "./DoctorAppointments";
import { DoctorReviews } from "./DoctorReviews";

const DoctorData = {
  name: "sayed",
  email: "xxx.gmail.com",
  phoneNumber: "01xxxxxx",
  createdAt: "xxxx/xx/xx",
};

const MyAppointments = [
  {
    id: "1",
    patient: "gamal",
    updatedAt: "17/8/2023",
  },
  {
    id: "2",
    patient: "ahmed",
    updatedAt: "18/8/2023",
  },
  {
    id: "3",
    patient: "alaa",
    updatedAt: "19/8/2023",
  },
];
const MyReviews = [
  {
    id: "1",
    reviewWriter: "patient1",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: "4",
    createdAt: "xxxx/xx/xx",
  },
  {
    id: "2",
    reviewWriter: "patient2",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: "3",
    createdAt: "xxxx/xx/xx",
  },
];

export const DoctorProfile = () => {
  /*useEffect() to get doctor's data*/
  /*useEffect() to get doctor's appointments*/
  /*useEffect() to get doctor's reviews*/
  return (
    <div className="body" align="center">
      <div className="data">
        <h1>Doctor's Profile</h1>
        <p>Full Name : {DoctorData.name}</p>
        <p>Email : {DoctorData.email}</p>
        <p>Phone Number : {DoctorData.phoneNumber}</p>
        <p>Account Created in (Date) : {DoctorData.createdAt}</p>
      </div>
      <div className="appointment">
        <h2>Your Appointments</h2>
        {MyAppointments.map((appoint, index) => (
          <DoctorAppointments
            key={MyAppointments[index].id}
            data={MyAppointments[index]}
          ></DoctorAppointments>
        ))}
      </div>
      <div className="reviews">
        <h2>Your Reviews</h2>
        {MyReviews.map((review, index) => (
          <DoctorReviews
            key={MyAppointments[index].id}
            data={MyReviews[index]}
          ></DoctorReviews>
        ))}
      </div>
    </div>
  );
};
