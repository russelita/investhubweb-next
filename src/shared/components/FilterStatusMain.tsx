import React, { useMemo, useState } from 'react';

// type
import { DefaultOptionType } from 'antd/es/select';

// component
import SelectComponent from './SelectComponent';

export type FilterStatusMainProps = {
	// eslint-disable-next-line no-unused-vars
	onChangeStatus: (e: any) => void;
};

const FilterStatusMain = ({ onChangeStatus }: FilterStatusMainProps) => {
  // state
  const [valueStatus, setValueStatus] = useState<1 | 0 | 2>(2);

  // memo
  const options = useMemo<DefaultOptionType[]>(
    () => [
      {
        label: 'All',
        value: 2,
      },
      {
        label: 'Active',
        value: 1,
      },
      {
        label: 'Inactive',
        value: 0,
      },
    ],
    [],
  );

  // func
  const onChange = (e: any) => {
    setValueStatus(e);

    onChangeStatus(e === 2 ? undefined : Boolean(e));
  };

  return (
    <SelectComponent
      value={valueStatus}
      onChange={onChange}
      showSearch
      placeholder="-- Choose Status --"
      optionFilterProp="children"
      options={options}
      title="Choose Status"
      className="filter-main"
      style={{ height: '44px' }}
    />
  );
};

export default FilterStatusMain;
