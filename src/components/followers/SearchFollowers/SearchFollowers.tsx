/* svgs */
import SearchSvgDark from '@public/assets/svgs/icons/search_dark.svg'
import { Dispatch, SetStateAction } from 'react';

interface ISearchFriends {
  placeholderNickName: string
  setSearch: Dispatch<SetStateAction<string>>
}
export function SearchFriends ({placeholderNickName, setSearch}:ISearchFriends) {
  return (
    <div className="box-search separationMargin">
      <SearchSvgDark className="box-search__svg" />

      <input
        type="text"
        className="box-search__inputSearch"
        role="search"
        onChange={event => setSearch(event.target.value)}
        placeholder={`Busca en los seguidores de ${placeholderNickName}`}
      />
    </div>
  )
}
