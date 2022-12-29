import React from 'react'
import NewsItem from './NewsItem'

interface Props {
    items: any[]
}

const NewsGrid = ({ items }: Props) => {
    return (
        <div className='news-grid'>
            {items.map((item, i) => (
                <NewsItem key={i} item={item} />
            ))}
        </div>
    )
}

export default NewsGrid