import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';

const Wrapper = styled.div`
  .DateRangePickerInput {
    border: none;
    background: none;
  }
  .CalendarDay {
    transition: all 100ms linear;
  }
`;

const CustomPicker = () => (
  <Wrapper>
    <DateRangePicker />
  </Wrapper>
);

export default CustomPicker;
