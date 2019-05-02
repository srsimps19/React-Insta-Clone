import React from 'react';
import styled from 'styled-components';


export const Header = styled.header`
  width: 900px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  border-radius: 6px;
  border: 1px solid grey;
  background-color: white;`;

export const LeftSide = styled.div`
  display: flex;

  .fa-instagram {
    padding-top: 10px;
    padding-left: 10px;
  }

  p {
    margin: 0;
    padding: 0 15px;
    font-size: 2.5rem;
    color: grey;
  }

  h2 {
    font-size: 2.5rem;
    font-family: 'Satisfy', cursive;
    padding-top: 15px;
    padding-right: 10px;
  }`;

export const Center = styled.div`
  input {
  width: 275px;
  height: 40px;
  text-align: center;
  margin: 20px 10px 10px 10px;
  border-radius: 6px;
  border: 1px solid grey;
  }`;

export const RightSide = styled.div`
  margin-right: 10px;
    .fa-heart {
        padding: 10px 20px;
    }`;

const SearchBar = props => {
  return (
    <Header>
      <LeftSide>
        <i className="fab fa-instagram fa-3x"></i>
        <p>|</p>
        <h2>Instagram</h2>
      </LeftSide>
      <Center>
        <input type="text" placeholder="🔍 Search" onChange={props.searchPosts} />
      </Center>
      <RightSide>
          <i className="far fa-compass fa-3x" />
          <i className="far fa-heart fa-3x" />
          <i className="far fa-user-circle fa-3x" />
      </RightSide>
    </Header>
  );
};

export default SearchBar;