import { FC } from "react"
import { HeadInfo } from '@components/HeadInfo';
import { NavPages } from '@components/NavPages';
import { FooterActionButtons } from '@components/FooterActionButtons';

interface IFollowLayout{
    nameRoute: string
    titleHeaderPage: string
}

export const FollowLayout:FC<IFollowLayout> = ({children, nameRoute, titleHeaderPage}) => {
  return (
    <>
        <HeadInfo title={nameRoute} />
        <main className="container-global spacing-for-pages">
            <NavPages
                titleHeaderPage={titleHeaderPage}
            />

            {children}

            <FooterActionButtons />
        </main>
    </>
  )
}
