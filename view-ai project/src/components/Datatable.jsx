// src/components/DataTable.js
import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=20');
        const jsonData = await response.json();
        setData(jsonData.results); // Setting the results array from the API response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Postcode</th>
            <th>Street Number</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name.first} {item.name.last}</td>
              <td>{item.location.city}, {item.location.state}, {item.location.country}</td>
              <td>{item.location.postcode}</td>
              <td>{item.location.street.number} {item.location.street.name}</td>
              <td>{item.location.coordinates.latitude}, {item.location.coordinates.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
