import React, { useEffect, useState, memo } from 'react';

// antd
import { Table, Select, ConfigProvider } from 'antd';
import type { TableProps } from 'antd/es/table';
import { CaretDownOutlined } from '@ant-design/icons';

// styled
import { styled } from 'styled-components';

const StyledComponent = styled.div`
	& .ant-table-thead {
		& tr {
			& td {
				display: none;
			}

			& th {
				background: #f7f5f8;
				border-bottom: none;
				padding: 16px 16px 16px 20px;
				color: #6e6e6e;

				&:first-of-type {
					border-radius: 30px 0px 0px 30px !important;
				}

				&:last-of-type {
					border-radius: 0px 30px 30px 0px !important;

					&:before {
						width: 0px !important;
					}
				}

				&:before {
					width: 2px !important;
				}
			}
		}

		& .ant-table-cell.ant-table-cell-scrollbar {
			border-radius: 0px 30px 30px 0px !important;
			background: #f7f5f8;
			box-sizing: none;
		}
	}

	& .ant-table-wrapper .ant-table .ant-table-body {
		scrollbar-color: #bebfcf #f8f8f8;
		scrollbar-width: thin;

		&::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #6e6e6e;
			border-radius: 3px;
		}
		&::-webkit-scrollbar-track {
			background-color: #d9d9d9;
		}
	}

	& .ant-table-content {
		scrollbar-color: #bebfcf #f8f8f8;
		scrollbar-width: thin;

		&::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #6e6e6e;
			border-radius: 3px;
		}
		&::-webkit-scrollbar-track {
			background-color: #d9d9d9;
		}
	}

	& .ant-table-tbody tr td {
		padding: 16px 16px 16px 20px;
	}

	& .ant-pagination-item-active {
		border: none;
		background: #f7f5f8;
		border-radius: 50%;
		font-weight: 400;

		& a {
			color: #212121 !important;
		}
	}

	& .ant-pagination.ant-table-pagination {
		position: relative;
		font-size: 14px;
		line-height: 22px;
		margin-bottom: 0px !important;

		& .ant-pagination-total-text {
			position: absolute;
			left: 0;
			top: 0;

			& .ant-select-selector {
				border: none;
				box-shadow: none;
				font-size: 14px;
				line-height: 22px;

				&:focus,
				&:hover,
				&:active {
					border: none !important;
					box-shadow: none !important;
				}
			}
		}

		& .ant-pagination-options {
			display: none;
		}
	}
`;

type CustomTableProps = {
	DEFAULT_PAGE_SIZE?: number[];
	total?: number;
	// eslint-disable-next-line no-unused-vars
	onChangePageSize?: (e: number) => void;
	xScroll?: number;
	pageSizes?: number;
	pages?: number;
};

const CustomTable = ({
  DEFAULT_PAGE_SIZE = [10, 20, 50, 100],
  total,
  onChangePageSize,
  // eslint-disable-next-line no-unused-vars
  xScroll,
  pageSizes,
  pages,
  ...props
}: TableProps<any> & CustomTableProps) => {
  // state
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE[0]);

  // func
  const handleChangePageSize = (pageSize_: number) => {
    setPageSize(pageSize_);

    onChangePageSize && onChangePageSize(pageSize_);
  };

  // effect
  useEffect(() => {
    if (pageSizes && pageSizes !== pageSize) {
      setPageSize(pageSizes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSizes]);

  return (
    <StyledComponent>
      <Table
        scroll={{
          y: 300,
          // ...(xScroll ? { x: xScroll } : {}),
          scrollToFirstRowOnChange: true,
        }}
        pagination={{
          showTotal: (total, range) => (
            <div style={{ display: 'flex', gap: '35px' }}>
              <p>{`${range[0]}-${range[1]} of ${total} items`}</p>

              <div>
								Rows per page:{' '}
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        controlHeight: 25,
                      },
                    },
                  }}
                >
                  <Select
                    showSearch
                    placeholder=""
                    defaultValue={DEFAULT_PAGE_SIZE[0]}
                    value={pageSize}
                    onChange={handleChangePageSize}
                    options={DEFAULT_PAGE_SIZE.map((x) => ({
                      value: x,
                      label: x,
                    }))}
                    suffixIcon={
                      <CaretDownOutlined
                        rev={'icon'}
                        style={{ color: '#E2E1E6', pointerEvents: 'none' }}
                      />
                    }
                  />
                </ConfigProvider>
              </div>
            </div>
          ),
          pageSize: pageSize,
          ...(total ? { total } : {}),
          ...(pages ? { current: pages } : {}),
        }}
        {...props}
      />
    </StyledComponent>
  );
};

export default memo(CustomTable);
