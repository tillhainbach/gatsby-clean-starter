import { css } from 'styled-components';
import Theme from './Theme';

// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${MEDIA.PHONE`
//   font-size: 1.6rem;
// `};
//
// ${MEDIA.MIN_TABLET`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/breakpoints.js

type MediaAccumulator = {
  [key: string]: typeof css;
};

const MEDIA = Object.keys(Theme.breakpoints).reduce(
  (acc: MediaAccumulator, label: string) => {
    acc[label] = (first: any, ...interpolations: any) => css`
      @media (max-width: ${Theme.breakpoints[label] / 16}em) {
        ${css(first, ...interpolations)};
      }
    `;

    acc[`MIN_${label}`] = (first: any, ...interpolations: any) => css`
      @media (min-width: ${Theme.breakpoints[label] / 16}em) {
        ${css(first, ...interpolations)};
      }
    `;

    return acc;
  },
  {}
);

export default MEDIA;
