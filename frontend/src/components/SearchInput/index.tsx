import { SearchInputContainer, SearchInputContent } from './styles'

export const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchInputContent>
        <input type="text" placeholder="Seleciono o Destino" />
        <input type="text" placeholder="Quantos dias" />
        <button>Buscar</button>
      </SearchInputContent>
    </SearchInputContainer>
  )
}
