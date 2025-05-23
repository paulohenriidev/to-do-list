import styled from "styled-components";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TopInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.25rem;
  color: #37e359;
  margin: 2% 0;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  color: #fff;
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
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Item = styled.ul`
  width: 100%;
  padding: 0;
`;

export const CheckIcon = styled(MdCheckBox)`
  cursor: pointer;
  color: #fff;
  width: 24px;
  height: 24px;
`;

export const UncheckIcon = styled(MdCheckBoxOutlineBlank)`
  cursor: pointer;
  color: #fff;
  width: 24px;
  height: 24px;
`;

export const Trash = styled(FaDeleteLeft)`
  cursor: pointer;
  color: #fff;
  width: 24px;
  height: 24px;

  &:hover {
    color: rgba(203, 203, 203, 0.86);
  }
`;

export const ListItem = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
  padding: 25px;
  border-radius: 10px;
  height: 60px;
  background-color: ${({ $isFinished }) =>
    $isFinished ? "rgba(55, 227, 64, 0.74)" : "rgba(55, 89, 227, 0.87)"};
`;

export const Text = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 20px;
  font-size: 1.0625rem;
  letter-spacing: 0.6px;
  font-weight: 500;
  color: #fff;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const StatusBox = styled.div`
  flex: 1;
  background-color: rgba(55, 89, 227, 0.2);
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: inset 0 0 0.25rem #2c3c6c, 0 0 0.5rem #244ea0;

  &.done {
    background-color: rgba(55, 227, 89, 0.2);
    color: #37e359;
    box-shadow: inset 0 0 0.25rem #2c6c3c, 0 0 0.5rem #2aa848;
  }

  &.pending {
    background-color: rgba(227, 181, 55, 0.15);
    color: #e3b537;
    box-shadow: inset 0 0 0.25rem #6c5c2c, 0 0 0.5rem #a88d2a;
  }
`;
