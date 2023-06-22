import React, { useRef, useEffect } from 'react';

export function CarDetails({ initialData }) {
    const formRef = useRef(null);

    useEffect(() => {
        formRef.current.reset();
    }, [initialData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const model = formData.get('model');
        const year = formData.get('year');
        const color = formData.get('color');

        event.target.reset();
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="model">Model:</label>
            <input
                type="text"
                id="model"
                name="model"
                defaultValue={initialData.model}
            />

            <label htmlFor="year">Year:</label>
            <input
                type="text"
                id="year"
                name="year"
                defaultValue={initialData.year}
            />

            <label htmlFor="color">Color:</label>
            <input
                type="text"
                id="color"
                name="color"
                defaultValue={initialData.color}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

