import { AuthContext } from "context/ContextProvider"
import { useContext } from "react"
import { CircleStories } from "./CircleStories"

export const ContentCircleStories = () => {
    const { user: UserState } = useContext(AuthContext)
    const { user, isLoading } = UserState
    return (
        <section className="content-circle-stories">
            {user && !isLoading && <>
                <CircleStories />
                <CircleStories />
                <CircleStories />
            </>}
        </section>
    )
}
