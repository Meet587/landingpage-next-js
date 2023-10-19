"use client";
import React from "react";
import { BaseAccordion } from "./base-accordion";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from "./Shared";

export default function Accordion({ items, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => {
        return (
          <>
            {items.map((item, index) => (
              <AccordionItem
                key={item.title}
                isOpen={openIndexes.includes(index)}
              >
                <AccordionButton
                  onClick={() =>
                    handleItemClick(
                      index,
                      openIndexes.includes(index) ? "open" : "closed"
                    )
                  }
                >
                  <span
                    className={openIndexes.includes(index) ? "open" : "closed"}
                  ></span>
                  {item.title}
                </AccordionButton>
                <AccordionContents isOpen={openIndexes.includes(index)}>
                  {item.contents}
                </AccordionContents>
              </AccordionItem>
            ))}
          </>
        );
      }}
    </BaseAccordion>
  );
}
