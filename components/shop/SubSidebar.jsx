import {css, cx} from '@emotion/css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import {MdLocalCafe} from 'react-icons/md';
import {GrCafeteria, GrRestaurant} from 'react-icons/gr';
import {GiSadCrab, GiSushis} from 'react-icons/gi';
import {useRouter} from 'next/router';

const SubSidebar = () => {
  const router = useRouter();

  const items = [
    {
      heading: `レストラン`,
      icon: ({className = css``}) => {
        return <GrCafeteria size={24} className={className} />;
      },
      pathname: `/restaurant`,
      subItems: [
        {
          heading: `なばの`,
          pathname: `/restaurant/nabano`,
        },
        {
          heading: `フェイバレンタイン`,
          pathname: `/restaurant/faye-valentine`,
        },
        {
          heading: `スピーゲル`,
          pathname: `/restaurant/spiegel`,
        },
      ],
    },
    {
      heading: `寿司`,
      icon: ({className = css``}) => {
        return <GiSushis size={24} className={className} />;
      },
      pathname: `/sushi`,
      subItems: [
        {
          heading: `かっぱ寿司`,
          pathname: `/sushi/kappa-sushi`,
        },
      ],
    },
    {
      heading: `カフェ`,
      icon: ({className = css``}) => {
        return <MdLocalCafe size={24} className={className} />;
      },
      pathname: `/cafe`,
      subItems: [
        {
          heading: `スタバ`,
          pathname: `/cafe/starbucks`,
        },
        {
          heading: `ドトール`,
          pathname: `/cafe/doutor`,
        },
        {
          heading: `タリーズ`,
          pathname: `/cafe/tullys`,
        },
      ],
    },
    {
      heading: `カニ`,
      icon: ({className = css``}) => {
        return <GiSadCrab size={24} className={className} />;
      },
      subItems: [],
    },
  ];

  return (
    <div
      className={cx(
        'absolute h-full border-r-2 overflow-x-hidden overflow-y-auto',
        css`
          left: 80px;
          width: 240px;
          transition: left 0.4s ease 200ms, width 0.4s ease 200ms;
          @media (max-width: 768px) {
            left: 0;
            width: 0;
            border: none;
          }
        `
      )}
    >
      <Accordion allowZeroExpanded className={`select-none`}>
        {items.map((item, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton
                  className={cx(
                    `accordion__button`,
                    `hover:!bg-gray-100 hover:!cursor-pointer`,
                    `!bg-transparent !text-inherit`,
                    `!border-b-2 !border-r-2`,
                    `flex items-center w-full`,
                    `relative`,
                    `!pl-10`,
                    css`
                      &::before {
                        opacity: ${item.subItems.length === 0 ? 0 : 1};
                        visibility: ${item.subItems.length === 0
                          ? `hidden`
                          : `visble`};
                        display: inline-block;
                        content: '';
                        position: absolute;
                        right: 20px;
                      }
                    `
                  )}
                >
                  {item.heading}
                  {item.icon({className: `absolute left-2`})}
                </AccordionItemButton>
              </AccordionItemHeading>
              {item.subItems.map((subItem, j) => {
                return (
                  <AccordionItemPanel
                    key={i + j}
                    className={cx(
                      `accordion__panel`,
                      `hover:!bg-gray-100 hover:!cursor-pointer`,
                      `!bg-transparent !text-inherit`,
                      `!border-t-2`,
                      `flex items-center w-full`,
                      `relative`,
                      `!pl-10`,
                      css`
                        animation: fadein 0.35s ease-in;
                        animation-name: none;
                      `
                    )}
                    onClick={(e) => {
                      router.push({
                        pathname: `/shop${subItem.pathname}`,
                      });
                    }}
                  >
                    {subItem.heading}
                  </AccordionItemPanel>
                );
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SubSidebar;
