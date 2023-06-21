import connection from "../database/database";

async function getPassengersWithTravels() {
  const query = `
    SELECT passengers.fullname AS passenger, COUNT(passenger_travel.travelId) AS travels
    FROM passengers
    LEFT JOIN passenger_travel ON passengers.id = passenger_travel.passengerId
    GROUP BY passengers.id
    ORDER BY travels DESC;
  `;

  const result = await connection.query(query);
  return result.rows;
}

export { getPassengersWithTravels };