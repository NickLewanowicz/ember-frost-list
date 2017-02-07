import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'

import {unit} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = unit('frost-list-item')
describe(test.label, function () {
  test.setup()

  let component

  beforeEach(function () {
    component = this.subject()
  })

  it.skip('includes className frost-list-item', function () {
    expect(component.classNames).to.include('frost-list-item')
  })

  describe.skip('dependent keys', function () {
    let isSelectedDependentKeys, isExpandedDependentKeys
    beforeEach(function () {
      isSelectedDependentKeys = [
        'model.isSelected'
      ]

      isExpandedDependentKeys = [
        'model.isExpanded'
      ]
    })
    it('sets correct dependent keys for isSelected computed property', function () {
      expect(
        component.isSelected._dependentKeys
      ).to.eql(isSelectedDependentKeys)
    })

    it('sets correct dependent keys for isExpanded computed property', function () {
      expect(
        component.isExpanded._dependentKeys
      ).to.eql(isExpandedDependentKeys)
    })
  })

  it.skip('"isExpanded" computed property', function () {
    component.set('model', {isExpanded: true})

    expect(
      component.get('isExpanded')
    ).to.eql(true)
  })

  it.skip('"isSelected" computed property', function () {
    component.set('model', {isSelected: true})

    expect(
      component.get('isSelected')
    ).to.eql(true)
  })
})
