import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorWithDate from 'components/shared/author-with-date';
import CategoryLabel from 'components/shared/category-label';
import Link from 'components/shared/link';

import bg from './images/bg.svg';

const Hero = ({ title, category, date, slug, image, description, author, blogPageURL }) => (
  <section className="safe-paddings relative overflow-hidden py-36 lg:py-32 md:pt-28 md:pb-10 sm:pt-18">
    <div className="container-lg relative z-10">
      <article className="grid grid-cols-2 items-center gap-x-16 md:flex md:flex-col">
        <div className="flex flex-col md:order-2 md:mt-5">
          <header>
            <CategoryLabel
              url={`/${blogPageURL}/${category.slug}`}
              theme={category.color}
              size="xs"
            >
              {category.name}
            </CategoryLabel>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-3xl">
              <Link
                className="inline-block align-top line-clamp-2 md:line-clamp-none"
                to={slug}
                theme="white"
              >
                {title}
              </Link>
            </h1>
            <p className="mt-2.5 text-gray-8 line-clamp-3 xl:line-clamp-1 md:line-clamp-none">
              {description}
            </p>
          </header>

          <footer className="mt-5 flex items-center space-x-4">
            <AuthorWithDate author={author} date={date} />
          </footer>
        </div>

        <Link className="w-full md:order-1 md:block" to={slug}>
          <GatsbyImage
            className="h-full w-full"
            imgClassName="rounded-lg"
            image={getImage(image.localFile)}
            alt={image.alternativeText || ''}
          />
        </Link>
      </article>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alternativeText: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  blogPageURL: PropTypes.string.isRequired,
};

Hero.defaultProps = {};

export default Hero;