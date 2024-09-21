import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addService = (service) => {
    if (editingIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = service;
      setServices(updatedServices);
      setEditingIndex(null);
    } else {
      setServices([...services, service]);
    }
  };

  const editService = (index) => {
    setEditingIndex(index);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm onSubmit={addService} editingService={services[editingIndex]} />
      <ServiceList services={services} onEdit={editService} onDelete={deleteService} />
    </div>
  );
};

export default App;
