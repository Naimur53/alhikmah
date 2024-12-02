import React from "react";
import Footer from "../Footer/Footer";
import NewsletterForm from "../Newsletter/NewsletterForm";
import Bukhari from "../Bukhari/Bukhari";
import { BlogCarousel } from "../BlogCarousel/BlogCarousel";
import NewBooks from "../NewBooks/NewBooks";
import Donation from "../Donation/Donation";
import ChildBooks from "../ChildBooks/ChildBooks";
import { PopulerWriters } from "../PopulerWriters/PopulerWriters";
import PopularPublishers from "../PopularPublishers/PopularPublishers";
import { Navbar } from "../navigation/Navbar";
import { HadisBooks } from "../HadisBooks/HadisBooks";
import { Banner } from "../Banner/Banner";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const HomeComponents = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto">
        <NewBooks />
        <Donation />
        <ChildBooks />
        <Bukhari />
        <PopulerWriters />
        <PopularPublishers />
        <HadisBooks />
        <Bukhari />
        <WishlistBooks/>
        <BlogCarousel />
        <NewsletterForm />
      </div>
      <Footer />
    </>
  );
};

export default HomeComponents;
