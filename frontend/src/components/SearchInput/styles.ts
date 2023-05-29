import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInputContent = styled.form`
  width: 100%;
  max-width: 62.437rem;
  height: 11.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 70px rgba(63, 145, 148, 0.1);

  margin-top: -5.75rem;
  border-radius: 30px;

  input {
    border: 1px solid ${({ theme }) => theme.colors['primary-green-light']};
    width: 21.5rem;
    height: 3.5rem;
    border-radius: 12px;
    padding: 1rem;
  }

  button {
    width: 11.25rem;
    height: 3.5rem;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
  }
`
