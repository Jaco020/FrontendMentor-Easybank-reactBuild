import React from 'react';
import "./article.scss";
import ArticleItem from "./ArticleItem";
import ImgMoney from "../../images/image-currency.jpg";
import ImgRest from "../../images/image-restaurant.jpg";
import ImgPlane from "../../images/image-plane.jpg";
import ImgConf from "../../images/image-confetti.jpg";

function Article() {
    return (
        <div className="article">
            <div className="article__wrapper">
                <h1>Latest Articles</h1>
                <div className="article__grid">
                    <ArticleItem img_src={ImgMoney} author="Claire Robinson" head="Receive money in any currency with no fees">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</ArticleItem>
                    <ArticleItem img_src={ImgRest} author="Wilson Hutton" head="  Treat yourself without worrying about money">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</ArticleItem>
                    <ArticleItem img_src={ImgPlane} author="Wilson Hutton" head="Take your Easybank card wherever you go">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</ArticleItem>
                    <ArticleItem img_src={ImgConf} author="Claire Robinson" head="Our invite-only Beta accounts are now live!">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</ArticleItem>
                </div>
            </div>
        </div>
    )
}

export default Article
