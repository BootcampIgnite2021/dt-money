import styled from "styled-components";

export const Conatainer = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageLogo = styled.img``;

export const Button = styled.button`
  font-size: 1rem;
  color: var(--shape);
  background: var(--blue-light);
  border: 0;
  font-size: 16px;
  font-weight: 600;
  padding: 0 2rem;
  border-radius: 0.3125rem;
  height: 3rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
