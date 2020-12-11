import React, {useState} from "react";
import styles from "./Paginator.module.css";

export let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 20}: PropsUsersType) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}
                    disabled={portionNumber === 1}>Prev
            </button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={currentPage === p ? styles.selectedPage : styles.pageNumber}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p} </span>
                })}
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}
                    disabled={portionCount === portionNumber}>Next
            </button>
        </div>
    )
}

type PropsUsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number

}
