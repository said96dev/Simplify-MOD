import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  background: var(--white);
  border-radius: var(--borderRadius);
  padding: 2rem;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

export default Wrapper
