import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Link from 'components/shared/link';

import ArticleCardPropTypes from '../article-card-prop-types';

const ArticleCardMedium = ({
  className,
  title,
  category,
  createdAt,
  slug,
  cover,
  description,
  author,
  blogPageURL,
}) => (
  <article className={clsx('flex flex-col', className)}>
    <Link to={slug}>
      <GatsbyImage
        imgClassName="rounded-lg"
        image={getImage(cover.localFile)}
        alt={cover.alternativeText || ''}
      />
    </Link>
    <div className="mt-5 flex grow flex-col justify-between">
      <header className="space-y-3.5">
        <CategoryLabel url={`/${blogPageURL}/${category.slug}`} theme={category.color} size="xs">
          {category.name}
        </CategoryLabel>
        <h1 className="text-[22px] font-normal lg:text-[18px] xs:text-[16px]">
          <Link className="line-clamp-2 inline-block align-top" to={slug} theme="black">
            {title}
          </Link>
        </h1>
        <p className="line-clamp-3 text-base font-book text-gray-8">{description}</p>
      </header>
      <footer className="mt-3 flex items-center space-x-3 md:mt-5">
        <AuthorWithDate author={author} date={createdAt} />
      </footer>
    </div>
  </article>
);

ArticleCardMedium.propTypes = {
  className: PropTypes.string,
  ...ArticleCardPropTypes,
};

ArticleCardMedium.defaultProps = {
  className: null,
};

export default ArticleCardMedium;