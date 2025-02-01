import Details from "../../components/Details/Details";
import Features from "../../components/Features/Features";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Reviews from "../../components/Reviews/Reviews";

const DetailsPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Details />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default DetailsPage;
