"use client"
import {FC, useEffect, useState} from 'react';
import PlusIcon from "@/public/images/icons/navbar/plus.svg";
import EditIcon from "@/public/images/icons/navbar/edit.svg";
import SearchIcon from "@/public/images/icons/navbar/search.svg";
import {AnimatePresence, motion} from "framer-motion";

const animateSearchVariants={
    hidden:{opacity:0},
    visible:{opacity: 1}
}
const TopMenu:FC = () => {

    const [scroll,setScroll]=useState(0)

    const handler=()=>{
        if(window.scrollY<=100){
            setScroll(window.scrollY)
        }
    }

    useEffect(() => {
        document.addEventListener("scroll",handler)
        return ()=>{
            document.removeEventListener("scroll",handler)
        }
    }, []);

    return (
        <div className={'sticky z-50 top-0 bg-cGrayUltraLight p-4 flex flex-col gap-3'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center justify-center font-sf text-lg font-medium text-cBlue'}>
                    Изм.
                </div>
                <div className={'flex items-center justify-center font-sf text-lg font-semibold text-black'}>
                    Чаты
                </div>
                <div className={'flex items-center justify-center font-sf gap-5'}>
                    <PlusIcon className={'w-5'}/>
                    <EditIcon className={'w-5'}/>
                </div>
            </div>
            <motion.div style={{height:40-scroll}} className={'bg-cGrayLight transition-all rounded-xl flex justify-center items-center'}>
                <AnimatePresence>
                    {scroll < 25 && <motion.div variants={animateSearchVariants} initial={'hidden'} animate={'visible'} exit={'hidden'} className={'flex gap-3 items-center'}>
                        <SearchIcon className={'w-4'}/>
                        <p className={'text-[1.05rem] font-sf text-cGray'}>Поиск</p>
                    </motion.div>}

                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default TopMenu;