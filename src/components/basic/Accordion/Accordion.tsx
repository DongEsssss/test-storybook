import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

export interface AccordionProps {
  title: string
  description: string
}

export const Accordions = ({ title, description }: AccordionProps) => {
  return (
    <>
      <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {description}
        </AccordionDetails>
      </Accordion>
    </>
  )
}
