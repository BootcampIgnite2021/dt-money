import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  img {
    right: 0;
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    border: 0;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--input-background);
    height: 4rem;
    padding: 0 1.5rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    margin-top: 1rem;
    padding: 0 1.5rem;
    width: 100%;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--green);
    height: 4rem;
    font-size: 1rem;
    color: var(--shape);
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface ButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4d",
};

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
  height: 4rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
