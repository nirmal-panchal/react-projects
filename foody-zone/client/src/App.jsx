import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

const BASE_URL = "http://localhost:9000/";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [active, setActive] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDataChange = () => {
    if (active === "all") {
      setFilteredData(data);
    } else {
      const filter = data && data?.filter((food) => food.type === active);
      setFilteredData(filter);
    }
  };

  useEffect(() => {
    handleDataChange();
  }, [active]);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter =
      data &&
      data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue?.toLowerCase())
      );
    setFilteredData(filter);
  };

  if (loading) return <div>{loading}</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="search Food.."
              onChange={searchFood}
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => setActive("all")}>All</Button>
          <Button onClick={() => setActive("breakfast")}>Breakfast</Button>
          <Button onClick={() => setActive("lunch")}>Lunch</Button>
          <Button onClick={() => setActive("dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      border: 1px solid #ff0909;
      border-radius: 5px;
      background-color: transparent;
      color: white;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      outline: none;
    }
    @media (0 < width < 600px) {
      flex-direction: column;
      height: 120px;
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 10px;
`;
export const Button = styled.div`
  color: white;
  border: 1px solid #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: #ff4343;
  }
`;
