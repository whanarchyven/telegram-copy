"use client"
import {FC} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {useSearchParams} from "next/navigation";

const Header: FC = () => {

    const params = useSearchParams()
    const name = params.get('name') ?? 'Aicharm Bot'
    const messagesQnt = params.get('messages') ?? 2152
    const displayPremiumIcon = params.get('premium') != 'false'

    const translateColorType = (color: string | null | undefined): colorInterface['color'] => {
        if (color == 'pink' || color == 'blue' || color == 'green' || color == 'indigo' || color == 'yellow') {
            return color;
        } else {
            return 'pink';
        }
    }

    interface colorInterface extends VariantProps<typeof cvaAvatar> {
    }

    const color: colorInterface['color'] = translateColorType(params.get('color'))

    const cvaHeaderContainer = cva(['h-[3.5rem] w-full', 'fixed top-0 z-50', 'flex justify-between items-center', 'shadow-sm', 'pt-3.5 pb-1 px-2', 'bg-white bg-opacity-80 backdrop-blur-3xl'])
    const cvaMessageQntContainer = cva(['flex gap-1 items-center'])
    const cvaArrowBackIcon = cva(['w-3'])
    const cvaMessagesQnt = cva(['px-1.5 font-sf text-sm text-white flex items-center rounded-full justify-center bg-cBlue'])
    const cvaAccountInfoContainer = cva(['flex flex-col items-center'])
    const cvaAccountNameContainer = cva(['flex gap-1 items-center'])
    const cvaAccountName = cva(['font-sf text-lg font-[500] tracking-wide leading-[100%]'])
    const cvaPremiumIcon = cva(['w-4'])
    const cvaTimeRecent = cva(['font-sf text-cGray leading-[100%] text-sm'])

    const cvaAvatar = cva(['w-10 h-10 rounded-full bg-gradient-to-b flex text-white font-bold items-center justify-center capitalize'], {
        variants: {
            color: {
                pink: ['from-pink-300 to-pink-500'],
                blue: ['from-blue-300 to-blue-500'],
                green: ['from-green-300 to-green-500'],
                indigo: ['from-indigo-300 to-indigo-500'],
                yellow: ['from-yellow-300 to-yellow-500']
            },
        },
        defaultVariants: {color: 'pink'}
    })


    const getAvatarBody = (name: string) => {
        const split = name.split(' ')
        return split[0][0].concat(split[1] ? split[1][0] : '')
    }
    const avatarBody = getAvatarBody(name)

    return (
        <div
            className={cvaHeaderContainer()}>
            <div className={cvaMessageQntContainer()}>
                <img className={cvaArrowBackIcon()} src={'/images/arow_back.svg'}/>
                <div
                    className={cvaMessagesQnt()}>
                    {messagesQnt}
                </div>
            </div>
            <div className={cvaAccountInfoContainer()}>
                <div className={cvaAccountNameContainer()}>
                    <p className={cvaAccountName()}>{name}</p>
                    {displayPremiumIcon && (<img className={cvaPremiumIcon()} src={'/images/premium.svg'}/>)}
                </div>
                <p className={cvaTimeRecent()}>был(а) недавно</p>
            </div>
            <div
                className={cvaAvatar({color: color})}>
                {avatarBody}
            </div>
        </div>
    );
};

export default Header;