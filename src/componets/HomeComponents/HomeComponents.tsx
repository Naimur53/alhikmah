import React from "react";
import Footer from "../Footer/Footer";
import NewsletterForm from "../Newsletter/NewsletterForm";
import Bukhari from "../Bukhari/Bukhari";
import { BlogCarousel } from "../BlogCarousel/BlogCarousel";
import NewBooks from "../NewBooks/NewBooks";
import Donation from "../Donation/Donation";
import ChildBooks from "../ChildBooks/ChildBooks";

const HomeComponents = () => {
  return (
    <>
    <div className="container mx-auto">
      <NewBooks/>
      <Donation/>
      <ChildBooks/>
      <Bukhari/>
      <BlogCarousel/>
      <NewsletterForm/>

    </div>
      <Footer />
    </>
  );
};

export default HomeComponents;
