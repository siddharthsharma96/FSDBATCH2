import Cards from "../components/Cards";

const Home = ({ cla }) => {
  return (
    <div class={`main-content ${cla}`}>
      <Cards
        head={"Welcome to your dashboard"}
        cont={
          "This is the main content area where you can display various cards or      widgets."
        }
        clsss={"content-header"}
      />

      <div class="content-grid">
        <Cards
          head={"Card 1"}
          cont={
            "Some content for card 1. This could be a graph, chart, or user data."
          }
          classs={"card"}
        />
        <Cards
          head={"Card 2"}
          cont={
            "Some content for card 2. You can expand this section with more details."
          }
          classs={"card"}
        />

        <Cards
          head={"Card 3"}
          cont={
            "Some content for card 3. These cards will adjust to fit the screen size."
          }
          classs={"card"}
        />

        <Cards
          head={"Card 4"}
          cont={"More card content for additional information."}
          classs={"card"}
        />
        <Cards
          head={"Card 5"}
          cont={"More card content for additional information."}
          classs={"card"}
        />
      </div>
    </div>
  );
};

export default Home;
