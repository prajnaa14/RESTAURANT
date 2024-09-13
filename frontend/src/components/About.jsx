import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Enjoy a dining experience full of delicious flavors, where every dish is made with care. The restaurant uses fresh ingredients to create tasty meals that everyone will love. With a cozy and welcoming atmosphere, it's the perfect place for any occasion, whether a quick lunch or a special dinner. From appetizers to desserts, each dish is packed with flavor. The friendly service and comfortable setting make it easy to relax and enjoy great food, leaving every guest satisfied and wanting to come back for more.
                </p>
                <Link to={"/"}>
                    Explore Menu{" "}
                    <span>
                        <HiOutlineArrowRight />
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About
