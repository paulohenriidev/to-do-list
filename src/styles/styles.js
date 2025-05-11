import styled from "styled-components";


export const Background = styled.div`
  background-color: #021316;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const Container = styled.div`
  background-color: rgba(13, 54, 34, 0.25);
  box-shadow: inset 0 0 0.0625rem rgb(9, 36, 23), 0 0 1.375rem rgb(36, 122, 80);
  border-radius: 1rem;
  width: 33%;
  padding: 10px 20px;
  margin-bottom: 2%;
 
`;
export const TopInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`

export const Title = styled.h1`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 200;
  padding: 1.25rem;
  color: #37e359;
  margin: 2% 0;
`;
export const Input = styled.input`
  width: 90%;
  height: 12%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background-color: rgba(8, 9, 9, 0.25);
  box-shadow: inset 0 0 0.625rem rgb(13, 48, 31), 0 0 0.125rem rgb(36, 122, 80);
  border-radius: 10px;
`;
export const Buttom = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  margin-left: 10px;
  font-weight: 900;
  font-size: 1.0625rem;
  border: none;
  outline: none;
  color: rgba(8, 9, 9, 0.85);
  background-color: #37e359;
`;

export const Item = styled.ul`
 
`
export const ListItem = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
  line-height: 2px;
  padding: 25px;
  border-radius: 10px;
  height: 60px;
  color: #fff;
  background-color: rgba(138, 0, 236, 0.72);
  box-shadow: inset 0 0 25px rgba(234, 154, 252, 0.52), 0 0 1px rgba(216, 171, 220, 0.94);
  `

export const Text = styled.li`
  font-size: 1.0625rem;
  font-weight: 600;
  /* list-style: none; */
`
