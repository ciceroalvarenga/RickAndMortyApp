import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Icon} from '@components/Icon';

import {ContainerInput, InputText} from './styles';
import theme from '@global/styles/theme';
import Search from '@assets/search.svg';
import {useDebounce} from 'hooks/useDebonce';

interface Props extends TextInputProps {
  value: any;
  onSearch: any;
}

export function Input({value, onSearch, ...rest}: Props) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onSearch, 500);

  function handleChange(event: any) {
    setDisplayValue(event);
    debouncedChange(event);
  }
  return (
    <ContainerInput>
      <Icon paddingHorizontal={10}>
        <Search color={theme.textColor.grey} />
      </Icon>
      <InputText {...rest} value={displayValue} onChangeText={handleChange} />
    </ContainerInput>
  );
}
