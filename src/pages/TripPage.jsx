import { useEffect } from "react";
import useRouter from "../hooks/useRouter ";
import trips from "../assets/data/trips.json";

import React from "react";

function TripPage() {
  // const { query, navigate } = useRouter();

  // const trip = trips.find((el) => el.id === query.id);

  // useEffect(() => {
  //   if (!trip) {
  //     navigate("/");
  //   }
  // }, [navigate, trip]);

  // console.log(trips);
  // console.log(query.id);
  // console.log(trip);

  return (
    <div>
      ВАЖЛИВО: всі data-test-id атрибути та value для селектів повинні
      залишитися такими ж як в розмітці. Без них завдання перевірятися не буде!
      повинен бути присутнім весь описаний вище функціонал (додаткові фічі
      додавати не потрібно) потрібно використовувати надані стилі (однак ви
      можете внести деякі зміни в них, щоб вони відповідали розмітці) не можно
      використовувати Fetch API. Замість цього ви повинні використовувати готові
      дані json (не ппотрібно їх змінювати) вам не потрібно впроваджувати
      додаткову логіку, окрім пунктів вище (наприклад, повний процес реєстрації)
      використовуйте лише бібліотеки React і React Router (без redux, бібліотек
      для валідації тощо) можна використовувати будь-які CSS-бібліотеки
    </div>

    // <main className="trip-page">
    //   <h1 className="visually-hidden">Travel App</h1>
    //   <div className="trip">
    //     <img
    //       data-test-id="trip-details-image"
    //       src={trip.image}
    //       className="trip__img"
    //       alt="trip"
    //     />
    //     <div className="trip__content">
    //       <div className="trip-info">
    //         <h3 data-test-id="trip-details-title" className="trip-info__title">
    //           {trip.title}
    //         </h3>
    //         <div className="trip-info__content">
    //           <span
    //             data-test-id="trip-details-duration"
    //             className="trip-info__duration"
    //           >
    //             <strong>{trip.duration}</strong> days
    //           </span>
    //           <span
    //             data-test-id="trip-details-level"
    //             className="trip-info__level"
    //           >
    //             {trip.level}
    //           </span>
    //         </div>
    //       </div>
    //       <div
    //         data-test-id="trip-details-description"
    //         className="trip__description"
    //       >
    //         {trip.description}
    //       </div>
    //       <div className="trip-price">
    //         <span>Price</span>
    //         <strong
    //           data-test-id="trip-details-price-value"
    //           className="trip-price__value"
    //         >
    //           {trip.price} $
    //         </strong>
    //       </div>
    //       <button
    //         data-test-id="trip-details-button"
    //         className="trip__button button"
    //       >
    //         Book a trip
    //       </button>
    //     </div>
    //   </div>
    // </main>
  );
}

export default TripPage;
