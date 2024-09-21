import React from 'react';

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ₹{service.price}</p>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceList;
