import * as React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from 'components/Button'
import Container from 'components/Container'
import Flex from 'components/Flex'
import Header from 'components/Header'
import IconButton from 'components/IconButton'
import Modal from 'components/Modal'
import Spacing from 'components/Spacing'
import Typography from 'components/Typography'

const FilterList = React.forwardRef(function FilterList(props, ref) {
  const {
    filters = [],
    filterOption,
    handleFilterChange,
    handleResetClick,
    handleModalHide,
    ...other
  } = props

  const insets = useSafeAreaInsets()
  const isFilterActive =
    filterOption.categories.length > 0 ||
    filterOption.dietary.length > 0 ||
    filterOption.price.length > 0

  return (
    <Modal ref={ref} presentationStyle="overFullScreen" {...other}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={handleModalHide}>
            <IconButton icon="Close" />
          </TouchableOpacity>
        }
        centerComponent={<Typography variant="h6">Filters</Typography>}
      />
      <Container>
        <Flex>
          {filters.map((filter, idx) => {
            const { heading, name } = filter

            const value = filterOption[name] || []

            return (
              <Spacing container key={idx}>
                <Spacing container mt={1} mb={2} fd="row" jc="space-between" ai="center">
                  <Typography variant="h6" uppercase>
                    {heading}
                  </Typography>

                  <Typography
                    variant="body2"
                    uppercase
                    component={Button}
                    onPress={() => handleResetClick(name)}
                  >
                    Clear All
                  </Typography>
                </Spacing>

                <Spacing container mr={2} mb={3} fd="row" fw="wrap">
                  {filter.options?.map((option) => {
                    const selected = value.includes(option.key)

                    return (
                      <Spacing key={option.id} mr={1} mb={2}>
                        <Button
                          size="large"
                          circle={name === 'price'}
                          color={selected ? 'success' : 'default'}
                          variant="contained"
                          onPress={() => {
                            handleFilterChange(name, option.key)
                          }}
                        >
                          <Typography
                            color={selected ? 'textWhite' : 'textSecondary'}
                            variant="body1"
                          >
                            {option.label}
                          </Typography>
                        </Button>
                      </Spacing>
                    )
                  })}
                </Spacing>
              </Spacing>
            )
          })}
          <Button
            enabled={isFilterActive}
            disabled={!isFilterActive}
            size="large"
            fullWidth
            color="success"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ position: 'absolute', bottom: insets.bottom }}
            onPress={handleModalHide}
          >
            Apply filters
          </Button>
        </Flex>
      </Container>
    </Modal>
  )
})

FilterList.propTypes = {
  filters: PropTypes.array,
  filterOption: PropTypes.object,
  handleFilterChange: PropTypes.func,
  handleResetClick: PropTypes.func,
  handleModalHide: PropTypes.func,
}

export default React.memo(FilterList)
