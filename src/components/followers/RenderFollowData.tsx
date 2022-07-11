import { Friend } from "src/models/User"
import { GridCards } from '../GridCards';
import { CardInfoProfile } from '../CardInfoProfile';
import { SearchFriends } from './SearchFollowers/SearchFollowers';
import { CardFriend } from './ListFriends/CardFriend';

interface IRenderFollowersData {
    numberFollowers: number
    numberFolloweds: number
    friends: Friend[]
    nickName: string
}

export const RenderFollowData = ({numberFolloweds, numberFollowers, friends, nickName}:IRenderFollowersData) => {
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
                
            {/* <CardInfoProfile number={5} textCard="Seguidores en común" /> */}
            </GridCards>
    
            <SearchFriends placeholderNickName={nickName}/>
    
            <section className="section-listUser">
                {
                    friends && friends.length > 0 ? friends.map((friend) => (
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