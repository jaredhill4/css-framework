import React from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from '../components/Framework';

export default () => (
  <Section>
    <Title id="forms">Forms</Title>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="grid grid--gapless-vertical">
            <div className="grid__col grid__col-sm-6">
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
            <div className="grid__col grid__col-sm-6">
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
                    <option>Choose...</option>
                    <option>TX</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid__col grid__col-sm-3">
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
            <div className="grid__col">
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
              <div className="form__field">
                <div className="form__submit">
                  <button className="btn btn--primary" type="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </ExampleView>
    </Example>
    <SubTitle id="forms-inputs">Inputs</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <label className="form__label" htmlFor="input-sample-1">
              Label
            </label>
            <input
              id="input-sample-1"
              type="text"
              className="form__input"
              name="input-sample-1"
            />
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <label class="form__label">...</label>
        <input type="text" class="form__input" />
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-selects">Selects</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <label className="form__label" htmlFor="select-sample-1">
              Label
            </label>
            <div className="form__select">
              <select id="select-sample-1" name="select-sample-1">
                <option>Choose...</option>
              </select>
            </div>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <label class="form__label">...</label>
        <div class="form__select">
          <select>
              <option>...</option>
          </select>
        </div>
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-checkboxes-radios">Checkboxes & Radios</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <label className="form__checkbox" htmlFor="checkbox-sample-1">
              <input
                id="checkbox-sample-1"
                type="checkbox"
                name="checkbox-sample-1"
              />{' '}
              Checkbox
            </label>
          </div>
          <div className="form__field">
            <label className="form__radio" htmlFor="radio-sample-1">
              <input id="radio-sample-1" type="radio" name="radio-sample-1" />{' '}
              Radio
            </label>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <label class="form__checkbox" for="...">
            <input id="..." type="checkbox" name="..." /> ...
        </label>
    </div>
    <div class="form__field">
        <label class="form__radio" for="...">
            <input id="..." type="radio" name="..." /> ...
        </label>
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-submit">Submit</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <div className="form__submit">
              <button type="submit" className="btn btn--primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <div class="form__submit">
            <button type="submit" class="btn btn--primary">...</button>
        </div>
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-help-text">Help Text</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <label className="form__label" htmlFor="input-sample-2">
            Label
          </label>
          <div className="form__field">
            <input
              id="input-sample-2"
              type="text"
              className="form__input"
              name="input-sample-2"
            />
            <small className="form__help">
              This is some help text for the form field.
            </small>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <label class="form__label">...</label>
    <div class="form__field">
        <input type="text" class="form__input" placeholder="..." />
        <small class="form__help">...</small>
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-sizes">Sizes</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--xs"
              placeholder="Extra small"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--sm"
              placeholder="Small"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--md"
              placeholder="Medium (default)"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--lg"
              placeholder="Large"
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--xl"
              placeholder="Extra large"
            />
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <input type="text" class="form__input form__input--xs" />
    </div>
    <div class="form__field">
        <input type="text" class="form__input form__input--sm" />
    </div>
    <div class="form__field">
        <input type="text" class="form__input form__input--md" />
    </div>
    <div class="form__field">
        <input type="text" class="form__input form__input--lg" />
    </div>
    <div class="form__field">
        <input type="text" class="form__input form__input--xl" />
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-rounded">Rounded</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input--round"
              placeholder="Rounded input"
            />
          </div>
          <div className="form__field">
            <div className="form__select form__select--round">
              <select>
                <option>Rounded select</option>
              </select>
            </div>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <input type="text" class="form__input form__input--round" />
    </div>
    <div class="form__field">
        <div class="form__select form__select--round">
            <select>
                <option>...</option>
            </select>
        </div>
    </div>
</form>`}
      </Code>
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
            <div className="form__input-group">
              <span className="form__input-group-addon">Addon</span>
              <input type="text" className="form__input" />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <div class="form__input-group">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
</form>`}
      </Code>
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
            <div className="form__input-group form__input-group--xs">
              <span className="form__input-group-addon">Addon</span>
              <input
                type="text"
                className="form__input"
                placeholder="Extra small"
              />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
          <div className="form__field">
            <div className="form__input-group form__input-group--sm">
              <span className="form__input-group-addon">Addon</span>
              <input type="text" className="form__input" placeholder="Small" />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
          <div className="form__field">
            <div className="form__input-group form__input-group--md">
              <span className="form__input-group-addon">Addon</span>
              <input
                type="text"
                className="form__input"
                placeholder="Medium (default)"
              />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
          <div className="form__field">
            <div className="form__input-group form__input-group--lg">
              <span className="form__input-group-addon">Addon</span>
              <input type="text" className="form__input" placeholder="Large" />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
          <div className="form__field">
            <div className="form__input-group form__input-group--xl">
              <span className="form__input-group-addon">Addon</span>
              <input
                type="text"
                className="form__input"
                placeholder="Extra large"
              />
              <button className="btn btn--primary">Button</button>
            </div>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <div class="form__input-group form__input-group--xs">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
    <div class="form__field">
        <div class="form__input-group form__input-group--sm">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
    <div class="form__field">
        <div class="form__input-group form__input-group--md">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
    <div class="form__field">
        <div class="form__input-group form__input-group--lg">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
    <div class="form__field">
        <div class="form__input-group form__input-group--xl">
            <span class="form__input-group-addon">...</span>
            <input type="text" class="form__input" />
            <button class="btn btn--primary">...</button>
        </div>
    </div>
</form>`}
      </Code>
    </Example>
    <SubTitle id="forms-input-states">Input states</SubTitle>
    <Example>
      <ExampleView>
        <form className="form">
          <div className="form__field">
            <input type="text" className="form__input" defaultValue="Default" />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input"
              defaultValue="Disabled"
              disabled
            />
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input"
              defaultValue="Read-only"
              readOnly
            />
          </div>
          <div className="form__field">
            <div className="form__select">
              <select>
                <option>Default</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <div className="form__select">
              <select disabled>
                <option>Disabled</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <div className="form__select">
              <select readOnly>
                <option>Read-only</option>
              </select>
            </div>
          </div>
          <div className="form__field">
            <label className="form__checkbox">
              <input type="checkbox" /> Default
            </label>
          </div>
          <div className="form__field">
            <label className="form__checkbox form__checkbox--disabled">
              <input type="checkbox" disabled /> Disabled
            </label>
          </div>
          <div className="form__field">
            <label className="form__radio">
              <input type="radio" /> Default
            </label>
          </div>
          <div className="form__field">
            <label className="form__radio form__radio--disabled">
              <input type="radio" disabled /> Disabled
            </label>
          </div>
        </form>
      </ExampleView>
      <Code language="html">
        {`<form class="form">
    <div class="form__field">
        <input type="text" class="form__input" />
    </div>
    <div class="form__field">
        <input type="text" class="form__input" disabled />
    </div>
    <div class="form__field">
        <input type="text" class="form__input" readonly />
    </div>
    <div class="form__field">
        <div class="form__select">
          <select>
              <option>...</option>
          </select>
        </div>
    </div>
    <div class="form__field">
        <div class="form__select">
          <select disabled>
              <option>...</option>
          </select>
        </div>
    </div>
    <div class="form__field">
        <div class="form__select">
          <select readonly>
              <option>...</option>
          </select>
        </div>
    </div>
    <div class="form__field">
        <label class="form__checkbox">
            <input type="checkbox" /> ...
        </label>
    </div>
    <div class="form__field">
        <label class="form__checkbox form__checkbox--disabled">
            <input type="checkbox" disabled /> ...
        </label>
    </div>
    <div class="form__field">
        <label class="form__radio">
            <input type="radio" /> ...
        </label>
    </div>
    <div class="form__field">
        <label class="form__radio form__radio--disabled">
            <input type="radio" disabled /> ...
        </label>
    </div>
</form>`}
      </Code>
    </Example>
  </Section>
);
