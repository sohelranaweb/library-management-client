import Banner from "@/components/Banner";
import BookGenre from "@/components/BookGenre";
import NewsLetter from "@/components/NewsLetter";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <BookGenre></BookGenre>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
