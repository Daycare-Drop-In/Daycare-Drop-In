import React, { useState, useEffect } from "react";

function ProviderAvailabilityTable() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Populates the date input dropdown menu from the present date until a month in the future
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1);

    const datesArray = [];
    while (currentDate <= futureDate) {
      datesArray.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(datesArray);
  }, []);

  return (
    <div className="container">
      <table border="1">
        <tr>
          <th>Date</th>
          <th>Infant</th>
          <th>Toddler</th>
          <th>Preschooler</th>
          <th>School Age</th>
        </tr>
        <tr>
          <td>
            <select>
              {dates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input type="number" min="0" max="9" />
          </td>
          <td>
            <input type="number" min="0" max="9" />
          </td>
          <td>
            <input type="number" min="0" max="9" />
          </td>
          <td>
            <input type="number" min="0" max="9" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ProviderAvailabilityTable;
