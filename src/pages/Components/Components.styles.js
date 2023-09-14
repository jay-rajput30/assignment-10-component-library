import styled from "styled-components";

export const StyledComponentSection = styled.section`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  border: solid orange;
  padding: var(--space-1) var(--space-6);
  & a {
    border: 1px solid var(--color-text);
    background-color: var(--clr-primary);
    padding: 0.15rem var(--space-2);
    text-decoration: none;
    color: var(--clr-background);
    border-radius: 5px;
  }
`;
