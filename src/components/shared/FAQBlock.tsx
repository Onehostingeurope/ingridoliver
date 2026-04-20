import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQBlock.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQBlockProps {
  items: FAQItem[]
  title?: string
}

export default function FAQBlock({ items, title = "Questions fréquentes" }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-block">
      {title && (
        <h2 className="faq-block__title">{title}</h2>
      )}
      <div className="faq-block__list" itemScope itemType="https://schema.org/FAQPage">
        {items.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              id={`faq-q-${i}`}
            >
              <span itemProp="name">{item.question}</span>
              <ChevronDown className="faq-item__chevron" size={18} />
            </button>
            <div
              className="faq-item__answer"
              aria-hidden={openIndex !== i}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="faq-item__answer-text" itemProp="text">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
