"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { track } from "@/lib/analytics"

type FaqItem = { question: string; answer: string }
type FaqCategory = { title: string; faqs: FaqItem[] }

interface FaqAccordionProps {
  categories: FaqCategory[]
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  function getQuestionByValue(value: string): string | null {
    for (const category of categories) {
      for (let i = 0; i < category.faqs.length; i++) {
        if (value === `${category.title}-${i}`) {
          return category.faqs[i].question
        }
      }
    }
    return null
  }

  return (
    <div className="flex flex-col gap-12">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="mb-6 text-xl font-bold text-foreground">
            {category.title}
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(value) => {
              if (value) {
                const question = getQuestionByValue(value)
                if (question) {
                  track("faq_expanded", { question })
                }
              }
            }}
          >
            {category.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`${category.title}-${index}`}
              >
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
