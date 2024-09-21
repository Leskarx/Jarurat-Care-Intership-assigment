import React, { useState, useEffect } from 'react';

const ServiceForm = ({ onSubmit, editingService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingService) {
      setName(editingService.name);
      setDescription(editingService.description);
      setPrice(editingService.price);
    }
  }, [editingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert('All fields are required');
      return;
    }
    onSubmit({ name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">
        {editingService ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
};

export default ServiceForm;
