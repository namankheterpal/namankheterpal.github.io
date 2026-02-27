"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { track } from "@/lib/analytics"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionTrackedProps {
  faqs: FaqItem[]
}

export function FaqAccordionTracked({ faqs }: FaqAccordionTrackedProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => {
        if (value) {
          const index = parseInt(value.replace("faq-", ""), 10)
          if (!Number.isNaN(index) && faqs[index]) {
            track("faq_expanded", { question: faqs[index].question })
          }
        }
      }}
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`faq-${index}`}>
          <AccordionTrigger className="text-left text-base">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
