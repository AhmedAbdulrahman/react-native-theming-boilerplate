import * as React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Modal from 'components/Modal'
import Spacing from 'components/Spacing'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Flex from 'components/Flex'
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
    <Modal
      leftComponent={
        <TouchableOpacity onPress={handleModalHide}>
          <Spacing mt={1}>
            <IconButton icon="Close" />
          </Spacing>
        </TouchableOpacity>
      }
      centerComponent={<Typography variant="h6">Filters</Typography>}
      ref={ref}
      presentationStyle="overFullScreen"
      {...other}
    >
      <Flex>
        {filters.map((filter, idx) => {
          const { heading, name } = filter

          const value = filterOption[name] || []

          return (
            <React.Fragment key={idx}>
              <Spacing mt={1} mb={2} fd="row" jc="space-between" ai="center">
                <View>
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
                </View>
              </Spacing>

              <Spacing mr={2} mb={3} fd="row" fw="wrap">
                <View>
                  {filter.options?.map((option) => {
                    const selected = value.includes(option.key)

                    return (
                      <Spacing key={option.id} mr={1} mb={2}>
                        <Button
                          size="large"
                          circle={name === 'price'}
                          color={selected ? 'success' : 'default'}
                          variant={selected ? 'contained' : 'outlined'}
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
                </View>
              </Spacing>
            </React.Fragment>
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
