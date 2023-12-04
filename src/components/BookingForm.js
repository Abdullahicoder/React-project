import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={(e) => handleChange(e)}
                                type="date"
                                required
                            />
                        </div>

                        {/* time section */}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">select a Time</option>
                                {Array.isArray(props.availableTimes) &&
                                    props.availableTimes.map((availableTime, index) => (
                                        <option key={index}>{availableTime}</option>
                                    ))}
                            </select>
                        </div>

                        {/* Guest section */}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input
                                id="book-guests"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            />
                        </div>

                        {/* Occasion section */}
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select
                                id="book-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Waxkale</option>
                            </select>
                        </div>

                        {/* Button section */}
                        <div className="btnReceive">
                            <input
                                aria-label="on Click"
                                type="submit"
                                value={"Make Your Reservation"}
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
