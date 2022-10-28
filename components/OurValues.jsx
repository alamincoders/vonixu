import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const OurValues = () => {
  return (
    <section className="container py-10 ">
      <h1 className="text-4xl font-bold">
        <span className="text-primary">Our</span> <span className="text-secondary ">Values</span>
      </h1>{" "}
      <div className="w-[108px] h-1 bg-primary border-0 rounded-2xl "></div>
      <p className="text-[20px] mt-10 font-sans  ">
        Our behaviors are driven by a philosophy and set of core values. Every decision we make, every strategy we use, every partnership we entertain
        is based on these core values.
      </p>
      <Accordion allowMultipleExpanded className="border-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-8 h-full">
          <div>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What harsh truths do you prefer to ignore?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum
                  consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>{" "}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Is free will real or just an illusion?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                  duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>{" "}
          <div>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Is free will real or just an illusion?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                  duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>{" "}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Is free will real or just an illusion?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                  duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </section>
  );
};

export default OurValues;
