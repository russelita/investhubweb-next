import React, { useCallback, useEffect, useRef, useState } from 'react';

// next
import { useRouter } from 'next/router';

// image
// import SearchIcon from 'src/shared/images/button/search.png';

// helper
import { debounce } from "../utils/debounce";

// component
import CustomButton from './CustomButton';
import { InputComponent } from './InputComponent';
import { SearchOutlined } from '@ant-design/icons';

export type ButtonInputComponentProps = {
	// eslint-disable-next-line no-unused-vars
	onSearch: (e: any) => void;
	placeholder: string;
};

const ButtonInputComponent = ({
  onSearch,
  placeholder,
}: ButtonInputComponentProps) => {
  // router
  const router = useRouter();

  // state
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [inputState, setInputState] = useState('');

  const inputRef = useRef<any>();

  // func
  const onFocusInput = () => {
    setIsFocusInput(true);
  };

  const onBlurInput = (e: any) => {
    const value_input = e?.target?.value;

    if (!value_input) {
      setIsFocusInput(false);
    }
  };

  const onChangeInput = (e: any) => {
    if (e?.target?.value?.length >= 3 || !e?.target?.value?.length) {
      onSearch(e);
    }
    /* else {
			onSearch(undefined);
		} */
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimazeSearch = useCallback(debounce(onChangeInput), []);

  // effect
  useEffect(() => {
    if (isFocusInput && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [isFocusInput]);

  useEffect(() => {
    if (router?.isReady && router?.query?.search_param) {
      setIsFocusInput(true);

      onSearch({ target: { value: String(router?.query?.search_param) } });

      setInputState(String(router?.query?.search_param));
    }
  }, [onSearch, router]);

  return (
    <>
      {isFocusInput ? null : (
        <CustomButton typeButton="search" onClick={onFocusInput} />
      )}

      {isFocusInput ? (
        <InputComponent
          id="search-list-component"
          style={{
            background: '#fff',
            height: '44px',
            padding: '10px 10px 10px 16px',
            fontSize: '16px',
            lineHeight: '24px',
          }}
          placeholder={placeholder}
          prefix={<SearchOutlined />}
          // prefix={
          // 	<Image
          // 		src={SearchIcon}
          // 		alt="search-icon"
          // 		width={21}
          // 		height={21}
          // 		quality={100}
          // 		loading="eager"
          // 	/>
          // }
          title={placeholder}
          ref={inputRef}
          onBlur={onBlurInput}
          onChange={optimazeSearch}
          onKeyDown={(e) => e.key === 'Enter' && onSearch(e)}
          defaultValue={inputState}
        />
      ) : null}
    </>
  );
};

export default ButtonInputComponent;
