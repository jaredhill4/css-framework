import React from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from './Framework';

const Forms = () =>
  <Section>
    <Title id="forms">Forms</Title>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="grid grid--gapless-vertical">
            <div className="grid__col-xs-12 grid__col-sm-6">
              <div className="form__field">
                <label className="form__label" htmlFor="fname">
                  First Name
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="fname"
                  placeholder="John"
                />
              </div>
            </div>
            <div className="grid__col-xs-12 grid__col-sm-6">
              <div className="form__field">
                <label className="form__label" htmlFor="lname">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="lname"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="grid__col-xs-12">
              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  placeholder="address@email.com"
                />
                <small className="form__help">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="address1">
                  Address Line 1
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="address1"
                  placeholder="123 Street"
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="address2">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="address2"
                  placeholder="Apt #"
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="phone">
                  Phone Number
                </label>
                <div className="form__input-group">
                  <span className="form__input-group-addon">+1</span>
                  <input
                    type="text"
                    className="form__input"
                    id="phone"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </div>
            <div className="grid__col-xs-8 grid__col-sm-7">
              <div className="form__field">
                <label className="form__label" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="city"
                  placeholder="Austin"
                />
              </div>
            </div>
            <div className="grid__col-xs-4 grid__col-sm-2">
              <div className="form__field">
                <label className="form__label" htmlFor="state">
                  State
                </label>
                <div className="form__select">
                  <select id="state">
                    <option>Select</option>
                    <option>TX</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid__col-xs-12 grid__col-sm-3">
              <div className="form__field">
                <label className="form__label" htmlFor="zip">
                  Zip
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="zip"
                  placeholder="12345"
                />
              </div>
            </div>
            <div className="grid__col-xs-12">
              <div className="form__field">
                <label className="form__checkbox">
                  <input type="checkbox" /> I agree to the terms and conditions.
                </label>
              </div>
              <div className="form__field">
                <label className="form__radio">
                  <input type="radio" name="yes_or_no" /> Yes
                </label>
                <label className="form__radio">
                  <input type="radio" name="yes_or_no" /> No
                </label>
              </div>
              <button className="btn btn--blue" type="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-sizes">Sizes</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--xs"
              placeholder=".form__input--xs"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--sm"
              placeholder=".form__input--sm"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--md"
              placeholder=".form__input--md"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--lg"
              placeholder=".form__input--lg"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--xl"
              placeholder=".form__input--xl"
            />
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-rounded">Rounded</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--round"
              placeholder=".form__input--round"
            />
          </div>
          <div className="form__field">
            <div className="form__select form__select--round">
              <select>
                <option>.form__select--round</option>
              </select>
            </div>
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-input-group">Input group</SubTitle>
    <Description>
      Wrap a <code>.form__input</code> or <code>.form__select</code> with a{' '}
      <code>.form__input-group</code> to create an input group. You can also
      nest a <code>span.form__input-group-addon</code> or <code>.btn</code>{' '}
      within an input group.
    </Description>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <label className="form__label">Default input group</label>
            <div className="form__input-group">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-input-group-sizes">Input group sizes</SubTitle>
    <Description>
      Input groups can be sized by adding a size modifier like{' '}
      <code>.form__input-group--xs</code>.
    </Description>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <label className="form__label">Extra small input group</label>
            <div className="form__input-group form__input-group--xs">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
          <div className="form__field">
            <label className="form__label">Small input group</label>
            <div className="form__input-group form__input-group--sm">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
          <div className="form__field">
            <label className="form__label">Medium input group</label>
            <div className="form__input-group form__input-group--md">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
          <div className="form__field">
            <label className="form__label">Large input group</label>
            <div className="form__input-group form__input-group--lg">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
          <div className="form__field">
            <label className="form__label">Extra large input group</label>
            <div className="form__input-group form__input-group--xl">
              <span className="form__input-group-addon">addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--blue">button</button>
            </div>
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-input-states">Input states</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input type="text" className="form__input" defaultValue="default" />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input"
              defaultValue="disabled"
              disabled
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input"
              defaultValue="readonly"
              readOnly
            />
          </div>
          <div className="form__field">
            <div className="form__select">
              <select>
                <option>default</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <div className="form__select">
              <select disabled>
                <option>disabled</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <div className="form__select">
              <select readOnly>
                <option>readonly</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <label className="form__checkbox">
              <input type="checkbox" /> default
            </label>
          </div>
          <div className="form__field">
            <label className="form__checkbox form__checkbox--disabled">
              <input type="checkbox" disabled /> disabled
            </label>
          </div>
          <div className="form__field">
            <label className="form__radio">
              <input type="radio" /> default
            </label>
          </div>
          <div className="form__field">
            <label className="form__radio form__radio--disabled">
              <input type="radio" disabled /> disabled
            </label>
          </div>
        </form>
      </ExampleView>
    </Example>
  </Section>;

export default Forms;
