import * as React from 'react'
import { ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Typography from 'components/Typography'
import AccordionHeader from 'components/AccordionHeader'
import AccordionContent from 'components/AccordionContent'
import Accordion from './Accordion'

const stories = storiesOf('Components/Accordion', module)

const AccordionStory = () => {
  const props = {}

  return (
    <Accordion {...props}>
      <AccordionHeader>
        <Typography>Header</Typography>
      </AccordionHeader>

      <AccordionContent>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, odit nostrum! Omnis porro
          odit doloribus natus praesentium cupiditate odio rem repudiandae hic earum delectus sed
          voluptatum tempore, dolor aut vero?
        </Typography>
      </AccordionContent>
    </Accordion>
  )
}

stories.add('Default', () => (
  <ScrollView>
    <AccordionStory />
  </ScrollView>
))
