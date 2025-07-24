import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const initialTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Junior Player",
    text: "Coach transformed my game! My serve and footwork have improved massively.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Miller",
    role: "Parent of Young Player",
    text: "My son’s confidence on the court has skyrocketed thanks to Coach's guidance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Club Champion",
    text: "The one-on-one coaching sessions are world-class. Highly recommended!",
    rating: 4,
  },
  {
    id: 4,
    name: "Melvin Benjamin",
    role: "FullStack Web Developer",
    text: "The one-on-one coaching sessions are world-class. Highly recommended! Thank You, Coach Julius",
    rating: 5,
  },
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      role: formData.role,
      text: formData.text,
      rating: parseInt(formData.rating),
    };
    setTestimonials([newTestimonial, ...testimonials]);
    setFormData({ name: "", role: "", text: "", rating: 5 });
  };

  return (
    <div className="container my-5 bg-black p-4 rounded shadow">

      {/* Heading */}
      <h2 className="text-center mb-5 text-white">What My students Say</h2>

      {/* Carousel */}
      <div id="testimonialCarousel" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          {testimonials.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={item.id}>
              <div className="d-flex justify-content-center">
                <div className="card text-center shadow-sm p-4 border-0" style={{ maxWidth: "600px", backgroundColor: "white" }}>

                  <div className="card-body text-dark">
                    <p className="card-text fst-italic mb-3">"{item.text}"</p>
                    <h5 className="card-title mb-1">{item.name}</h5>
                    <p className="text-muted mb-3">{item.role}</p>

                    {/* Star Rating */}
                    <div className="mb-2">
                      {[...Array(5)].map((star, i) => (
                        <span
                          key={i}
                          className={`me-1 ${
                            i < item.rating ? "text-warning" : "text-secondary"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <small className="text-muted">Rated {item.rating} Stars</small>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Review Submission Form */}
      <h4 className="text-center mb-4 text-white">Submit Your Review</h4>
      <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-white">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Role:</label>
          <input
            type="text"
            className="form-control"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Review:</label>
          <textarea
            className="form-control"
            rows="3"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Rating:</label>
          <select
            className="form-select"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Submit Review
          </button>
        </div>
      </form>

    </div>
  );
};

export default Testimonial;