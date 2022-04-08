import React from 'react';

import Heading from 'components/shared/heading';

import bg from './images/bg.svg';
import contentManagement from './images/content-management.svg';
import digest from './images/digest.svg';
import monitoring from './images/monitoring.svg';
import preferences from './images/preferences.svg';
import priorityManagement from './images/priority-management.svg';
import timezone from './images/timezone.svg';

const TITLE = "We've built it so you don't have to";
const ITEMS = [
  {
    icon: digest,
    title: 'Digest',
    description:
      'A digest engine that aggregates multiple events in to a single precise notification.',
  },
  {
    icon: preferences,
    title: 'User preferences',
    description:
      'Using Notu API to handle all user preferences and subscriptions across channels. UI components included.',
  },
  {
    icon: priorityManagement,
    title: 'Priority management',
    description:
      'A smart API to centralize all communication channels in a single place: E-mail, SMS, Direct, Push and many more...',
  },
  {
    icon: monitoring,
    title: 'Monitoring',
    description: 'Debug deliverability and analyze sending patterns  across multiple channels',
  },
  {
    icon: contentManagement,
    title: 'Content management',
    description:
      'Manage content for all channels and in multiple languages without the need to redeploy your code',
  },
  {
    icon: timezone,
    title: 'Timezone awareness',
    description: "Send transactional notifications based on user's timezone and working hours.",
  },
];

const Features = () => (
  <section className="features safe-paddings relative overflow-hidden bg-black pt-30 pb-40 lg:pt-24 lg:pb-32 md:pt-18 md:pb-28 sm:py-10">
    <div className="container relative z-10">
      <Heading
        size="md"
        tag="h2"
        className="text-center leading-tight lg:text-left sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>

      <ul className="mt-20 grid grid-cols-3 gap-x-8 gap-y-20 lg:mt-16 lg:gap-y-16 md:mt-14 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:block sm:gap-0 sm:space-y-12">
        {ITEMS.map(({ title, description, icon }, index) => (
          <li key={index}>
            <img src={icon} height={64} width={120} loading="lazy" alt={`Icon ${title}`} />
            <div className="mt-5">
              <Heading className="leading-snug lg:text-2xl" tag="h3" size="sm" theme="white">
                {title}
              </Heading>
              <p className="mt-3 max-w-[377px] font-light leading-snug text-gray-8 lg:mt-2 lg:max-w-none">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

export default Features;
