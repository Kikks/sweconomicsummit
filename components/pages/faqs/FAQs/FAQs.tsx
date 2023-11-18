import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { faqs } from './data';

const FAQs = () => {
  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 lg:px-20">
      <div className="container !max-w-[500px] space-y-2">
        {faqs.map((item, index) => (
          <Disclosure key={index} as="div" className="mt-2">
            {({ open }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * (index + 1),
                    duration: 0.2,
                    type: 'spring',
                    damping: 30,
                  },
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-lg font-medium text-green-950 duration-300 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180' : ''
                    } h-5 w-5 text-green-500  duration-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pb-10 pt-5 text-green-950">
                  {item.answer}
                </Disclosure.Panel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
