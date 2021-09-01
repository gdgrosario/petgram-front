import './SearchFollowers.scss'

/* svgs */
import searchSvgDark from 'assets/svgs/icons/search_dark.svg'

export function SearchFollowers () {
    return (
        <div className="box-search separationMargin">
            <img 
                className="box-search__svg"
                src={searchSvgDark} 
                alt="search"
            />
            <input 
                type="text" 
                className="box-search__inputSearch"
                role="search" 
                placeholder="Busca en los seguidores de Quimera"
            />            
        </div>
    )
}
