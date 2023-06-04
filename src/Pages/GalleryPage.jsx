import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import Gallery from "../Components/Gallery";
import GalleryData from "../Data/GalleryData";

const GalleryPage = () => {
  const [search, setSearch] = useState("");
  const [collection, setCollection] = useState([]);

  const handleSearchChange = (e) => {
    // mendapatkan value dari input search
    const searchValue = e.target.value;
    setSearch(searchValue); //update state search
  };

  //filter collection data berdasarkan search
  const handleSearchData = (data, criteria) => {
    return data.filter((d) =>
      d.tittle.toLowerCase().includes(criteria.toLowerCase())
    );
  };

  //setiap ada perubahan pada search state componentnya di render ulang
  useEffect(() => {
    if (search.length < 2) {
      //cek dulu apakah search value karakternya  > 3
      setCollection(GalleryData); // ngambil seluruh data
    } else {
      const updatedData = handleSearchData(collection, search); //panggil fungsi filter collection data
      setCollection(updatedData); // update collection state dengan data yang sudah difilter
    }
  }, [search]);

  // cek ketika pertama kali gallery page apakah collection state ada datanya
  useEffect(() => {
    if (collection.length < 1) {
      setCollection(GalleryData);
    }
  }, []);

  const [category, setCategory] = useState("");

  const handleFilterCategory = (data, criteria) => {
    if (criteria === "All Categories") return GalleryData;
    return data.filter((d) => d.category === criteria);
  };

  useEffect(() => {
    if (category && category.length > 1) {
      const updatedData = handleFilterCategory(GalleryData, category);
      setCollection(updatedData);
    }
  }, [category]);

  return (
    <div>
      <Navbar />
      <Search handleChange={handleSearchChange} />
      <Gallery
        setHandleCategory={setCategory}
        dataCollection={collection}
        isTitle={true}
        isFilter={true}
      />
      <Footer />
    </div>
  );
};

export default GalleryPage;
