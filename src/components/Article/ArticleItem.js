import React from 'react';
import "./article.scss";
import Link from "../elements/Link";

function ArticleItem({img_src,author,head,children}) {
    return (
        <div className="article__item">
            <Link>
                <img src={img_src}></img>
                <p className="author">By {author}</p>
                <h3>{head}</h3>
                <p className="small">{children}</p>
            </Link>
        </div>
    )
}

export default ArticleItem
