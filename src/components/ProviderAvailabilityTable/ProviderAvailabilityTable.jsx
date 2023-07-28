import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProviderAvailabilityTable() {
  const dispatch = useDispatch();
  const provider_id = useSelector((store) => store.provider.id);
  const availabilityArray = useSelector((store) => store.availability);

  console.log("Provider availability from reducer:", availabilityArray);

  //Use states for availability form input
  const [dateOptions, setDateOptions] = useState([]);
  const [date, setDate] = useState("");
  const [infant, setInfant] = useState(0);
  const [toddler, setToddler] = useState(0);
  const [preschool, setPreschool] = useState(0);
  const [schoolage, setSchoolage] = useState(0);

  //Empty form state for provider availability
  const availabilityForm = {
    provider_id: provider_id,
    date: date,
    infant: infant,
    toddler: toddler,
    pre_k: preschool,
    schoolage: schoolage,
  };

  // populates date input dropdown menu from the present date until a month in the future
  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1);

    const datesArray = [];
    while (currentDate <= futureDate) {
      datesArray.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDateOptions(datesArray);
  }, []);

  //Handle change functions for form inputs
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleInfantChange = (event) => {
    setInfant(parseInt(event.target.value));
  };
  const handleToddlerChange = (event) => {
    setToddler(parseInt(event.target.value));
  };
  const handlePreschoolChange = (event) => {
    setPreschool(parseInt(event.target.value));
  };
  const handleSchoolageChange = (event) => {
    setSchoolage(parseInt(event.target.value));
  };

  //SUBMIT NEW AVAILABILITY

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New availability being submitted!", availabilityForm);

    dispatch({ type: "ADD_AVAILABILITY", payload: availabilityForm });

    //Reset input fields
    setDate("");
    setInfant(0);
    setToddler(0);
    setPreschool(0);
    setSchoolage(0);
  };

  //DELETE AN AVAILABILITY TABLE ROW

  const handleDelete = (id) => {
    console.log("Item to delete:", id);
    dispatch({type: "DELETE"})
  };

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
            <select onChange={handleDateChange}>
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input
              type="number"
              value={infant}
              min="0"
              max="9"
              onChange={handleInfantChange}
            />
          </td>
          <td>
            <input
              type="number"
              value={toddler}
              min="0"
              max="9"
              onChange={handleToddlerChange}
            />
          </td>
          <td>
            <input
              type="number"
              value={preschool}
              min="0"
              max="9"
              onChange={handlePreschoolChange}
            />
          </td>
          <td>
            <input
              type="number"
              value={schoolage}
              min="0"
              max="9"
              onChange={handleSchoolageChange}
            />
          </td>
          <td>
            <button onClick={handleSubmit}>Submit</button>
          </td>
        </tr>
        {availabilityArray.map((entryRow) => (
          <tr key={entryRow.id}>
            <td>{entryRow.date}</td>
            <td>{entryRow.infant}</td>
            <td>{entryRow.toddler}</td>
            <td>{entryRow.pre_k}</td>
            <td>{entryRow.schoolage}</td>
            <td>
              <button onClick={() => handleDelete(entryRow.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProviderAvailabilityTable;
