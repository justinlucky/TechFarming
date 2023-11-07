import React, { useState } from 'react'

const BookingServices = () => {
    const [formData, setFormData] = useState({
        selectedServices: [],
        name: '',
        contact: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Send formData to the server
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Display a success message
            alert('Booking successful!');
        } else {
            // Handle errors
            alert('Booking failed. Please try again.');
        }
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {/* Service selection */}
                <div>
                    <label>Select Service:</label>
                    <select
                        multiple
                        name="selectedServices"
                        value={formData.selectedServices}
                        onChange={(e) => setFormData({ ...formData, selectedServices: e.target.value })}
                    >
                        {/* Render options for services here */}
                    </select>
                </div>

                {/* User information */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label>Contact:</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                </div>

                {/* Address details */}
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>
                {/* Additional address fields (city, state, pincode) can be added similarly */}

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BookingServices