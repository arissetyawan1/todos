
import { Table, Badge, Button } from 'antd';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { customerRepository } from '../../repository/customer';
import { DeletedCustomer } from '../_app';

export default function CustomerList() {
  const router = useRouter();
  const [state, setstate] = useState(1);
  const { data: dataCustomer } = customerRepository.hooks.useGetLists(state)
  const {deletedCustomer, setDeletedCustomer} = useContext(DeletedCustomer);
  console.log(dataCustomer, ' d');
  console.log(deletedCustomer, ' delete');

  const filteredData = dataCustomer?.data?.filter((data) => {
    return !deletedCustomer.includes(data?.id)
  })
  const column = [
    {
      title: 'Cutomer',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span> {text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'name',
      render: (text) => <span> <Badge status={`${text === 'active'? 'success':'error'}`}/>{text}</span>,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'name',
      render: (text)=>
        <a onClick={() =>
            // alert(text)
            router.push({
            pathname: '/customer/[id]',
            query: {id: text},
            })
        }>
          <Button type='primary'>
            View Cust
          </Button>
        </a>
      ,
    },
  ]
  return (
      <div className='w-full'>
      <Table
        dataSource={filteredData}
        className={'text-center'}
        columns={column}
        pagination={{
          current: dataCustomer?.meta?.pagination?.page,
          total: dataCustomer?.meta?.pagination?.total,
          onChange: (page) => {
            setstate(page)
          }
        }} />
      </div>
  )
}