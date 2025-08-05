import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testimonials"), formData);
      setFormData({ name: "", role: "", text: "", rating: 5 });

      // Re-fetch data to update the frontend without reload
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <>
      <Helmet>
  <title>Coach Dennis - Professional Tennis & Padel Coach in Abu Dhabi, United Arab Emirates</title>
  <meta
    name="description"
    content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros."
  />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Coach Dennis Tennis Academy" />
  <meta property="og:description" content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros." />
  <meta property="og:image" content="https://yourdomain.com/assets/With_Kids.jpg" />
  <meta property="og:url" content="https://coachdennisacademy.com" />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter Card (optional) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Coach Dennis Tennis Academy" />
  <meta name="twitter:description" content="Train with Coach Dennis at Dennis Tennis Academy. Top-rated tennis & padel coaching in Abu Dhabi, UAE, for beginners and pros." />
  <meta name="twitter:image" content="https://yourdomain.com/assets/With_Kids.jpg" />

  {/* ✅ SEO Keywords and Author */}
  <meta
    name="keywords"
    content="Coach Dennis, Tennis Coach Abu Dhabi, Padel Coach UAE, Tennis lessons Abu Dhabi, Kids Tennis Coaching, Tennis Academy UAE"
  />
  <meta name="author" content="Coach Dennis Tennis Academy" />
  <link rel="canonical" href="https://coachdennisacademy.com/" />

  {/* ✅ Structured Data (Schema Markup for Google) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Coach Dennis",
        "jobTitle": "Tennis and Padel Coach",
        "url": "https://coachdennisacademy.com",
        "sameAs": ["https://www.instagram.com/denistennis_/"],
        "worksFor": {
          "@type": "SportsOrganization",
          "name": "Dennis Tennis Academy"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "United Arab Emirates"
        }
      })
    }}
  />
</Helmet>


      <div className="container my-5 bg-black p-4 rounded shadow">
        <h2 className="text-center mb-5 text-white">What My Students Say</h2>
        <div className="row">
          {testimonials.map((item) => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card p-3">
                <p>"{item.text}"</p>
                <h5>{item.name}</h5>
                <p className="text-muted">{item.role}</p>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < item.rating ? "text-warning" : "text-secondary"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-center text-white mt-5">Submit Your Review</h4>
        <form
          className="mx-auto"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            className="form-control mb-2"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <textarea
            name="text"
            placeholder="Your Review"
            className="form-control mb-2"
            rows="3"
            value={formData.text}
            onChange={handleChange}
            required
          />
          <select
            name="rating"
            className="form-select mb-3"
            value={formData.rating}
            onChange={handleChange}
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && "s"}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-light w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Testimonial;
