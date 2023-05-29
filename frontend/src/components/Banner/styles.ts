import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const BannerContainer = styled.div`
  width: 100%;
  height: 40rem;
  background: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerContent = styled.div`
  width: calc(100% - 512px);

  h1 {
    font-size: ${({ theme }) => theme.fontsSize.h1};
    color: ${({ theme }) => theme.colors.white};
  }
`
