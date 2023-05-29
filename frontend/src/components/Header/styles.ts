import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8.25rem;
  display: flex;
  justify-content: center;
`
export const HeaderContent = styled.div`
  width: calc(100% - 240px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 4.375rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors['primary-green-dark']};
    }
  }
`
