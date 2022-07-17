import { Friend } from "src/models/User"
import { GridCards } from '../GridCards';
import { CardInfoProfile } from '../CardInfoProfile';
import { SearchFriends } from './SearchFollowers/SearchFollowers';
import { CardFriend } from './ListFriends/CardFriend';
import { useSearchFilter } from '../../hooks/useSearchFilter';

interface IRenderFollowersData {
    numberFollowers: number
    numberFolloweds: number
    friends: Friend[]
    nickName: string
}

export const RenderFollowData = ({numberFolloweds, numberFollowers, friends, nickName}:IRenderFollowersData) => {
    const {filterData, setSearch} = useSearchFilter<Friend>(friends, "nickname")
    return (
        <>
            <GridCards>
                <CardInfoProfile 
                    amount={numberFolloweds} 
                    navPage={`/${nickName}/followeds`}
                    textCard="Seguidos" />
                    
                <CardInfoProfile 
                    amount={numberFollowers} 
                    navPage={`/${nickName}/followers`}
                    textCard="Seguidores" />
                
            </GridCards>
    
            <SearchFriends 
                setSearch={setSearch}
                placeholderNickName={nickName}
            />
    
            <section className="section-listUser">
                {
                    filterData && filterData.length > 0 ? filterData.map((friend) => (
                        <CardFriend 
                            key={friend.id}
                            userName={friend.nickname} 
                            name={friend.name} />
                    )) : <p>No users yet</p>
                }
            </section>
        </>
    )
}