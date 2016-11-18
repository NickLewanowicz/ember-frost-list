import {expect} from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import {
  afterEach,
  beforeEach
} from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import sinon from 'sinon'

describeComponent(
  'frost-list-item',
  'Integration: FrostListItemComponent',
  {
    integration: true
  },
  function () {
    let sandbox

    beforeEach(function () {
      sandbox = sinon.sandbox.create()
    })

    afterEach(function () {
      sandbox.restore()
    })

    it('default state has no class "is-selected" and "is-expanded"', function () {
      this.render(hbs`
        {{frost-list-item}}
      `)
      expect(
        this.$('.frost-list-item').hasClass('is-selected'),
        'class "is-selected" not set'
      ).to.eql(false)

      expect(
        this.$('.frost-list-item').hasClass('is-expanded'),
        'class "is-expanded" not set'
      ).to.eql(false)
    })

    it('sets "is-selected" class when model.isSelected=true', function () {
      this.set('model', { isSelected: true })

      this.render(hbs`
        {{frost-list-item
          model=model
        }}
      `)

      expect(
        this.$('.frost-list-item').hasClass('is-selected'),
        'is-selected class set'
      ).to.eql(true)
    })

    it('sets "is-expanded" class when model.isSelected=true', function () {
      this.set('model', { isExpanded: true })

      this.render(hbs`
        {{frost-list-item
          model=model
        }}
      `)

      expect(
        this.$('.frost-list-item').hasClass('is-expanded'),
        'is-selected class set'
      ).to.eql(true)
    })

    it('fires onSelect closure action', function () {
      const externalActionSpy = sandbox.spy()

      this.on('externalAction', externalActionSpy)
      this.set('model', { isSelected: true })

      this.render(hbs`
        {{frost-list-item
          model=model
          onSelect=(action 'externalAction')
        }}
      `)

      this.$('.frost-list-item').trigger('click')

      expect(
        externalActionSpy.args[0][0],
        'event object is passed'
      ).to.have.property('type', 'click')

      expect(
        externalActionSpy.args[0][1].record.isSelected,
        '"record" property is passed'
      ).to.eql(true)

      expect(
        externalActionSpy.args[0][1].selectDesc,
        'selectDesc object is passed'
      ).to.eql(
        {
          'isSelected': false,
          'isTargetSelectionIndicator': false
        }
      )
    })
  }
)
