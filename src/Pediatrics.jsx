import React from "react";
import "./General.css";
import { useState } from "react";
import axios from "axios";
import Appointment from "./Appointment";
import { useEffect } from "react";

export default function General() {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:8800/pediatrics");
        setDoctor(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <section>
      <div class="row">
        <h2>
          Pediatrics is the branch of medicine that involves the medical care of
          infants, children, adolescents, and young adults.
        </h2>
      </div>
      <div className="doctors">
        {doctor.map((doctor) => (
          <div className="doctor">
            <div class="row">
              <div class="column">
                <div class="card">
                  <div class="img-container">
                    <img
                      src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE="
                      alt="somebody"
                    />
                  </div>
                  <h3>{doctor.Name}</h3>
                  <p>{doctor.Specialty}</p>
                  <div class="icons"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Appointment />
    </section>
  );
}
