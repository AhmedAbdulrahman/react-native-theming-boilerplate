import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import Link from 'navigation/Link'
import SafeAreaView from 'components/SafeAreaView'
import SvgIcon from 'components/SvgIcon'
import Typography from 'components/Typography'
import Spacing from 'components/Spacing'
import TextField from 'components/TextField'
import Flex from 'components/Flex'
import { Routes } from 'navigation/Routes'

const Search = () => {
  const navigation = useNavigation()
  const [text, onChangeText] = React.useState('')

  const isDisabled = text === ''
  return (
    <SafeAreaView edges={['top']}>
      <Spacing container mt={3} mb={3} mr={2} ml={2}>
        <Typography color="dark" variant="h4" gutterBottom>
          Search
        </Typography>
        <Spacing container fd="row" ai="center">
          <Flex>
            <TextField
              startAdornment={<SvgIcon icon="Search" color="grey" />}
              placeholder="Search"
              variant="outlined"
              fullWidth
              onChangeText={onChangeText}
            />
          </Flex>
          <Spacing ml={2}>
            <Link
              color={isDisabled ? 'textSecondary' : 'dark'}
              variant="body1"
              onPress={() => navigation.push(Routes.SearchResult, { text })}
              PressableProps={{
                disabled: isDisabled,
              }}
            >
              Search
            </Link>
          </Spacing>
        </Spacing>
      </Spacing>
    </SafeAreaView>
  )
}

export default React.memo(Search)
