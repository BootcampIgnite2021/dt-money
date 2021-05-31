import styled from "styled-components";

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
    border: 1px solid #d7d7d7;
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
