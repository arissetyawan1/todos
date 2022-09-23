
import { Button } from "antd";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Frame from "../../components/Frame";
import { customerRepository } from "../../repository/customer";
import { DeletedCustomer } from "../_app";


const  DetailCostumer=()=> {
    const router = useRouter();
    const { id } = router.query
    const { data: detailCustomer } = customerRepository.hooks.useGetProfileDetail(id);
    const { deletedCustomer, setDeletedCustomer } = useContext(DeletedCustomer)
    
    const deleteCustomer = async () => {
        setDeletedCustomer([...deletedCustomer, detailCustomer?.data?.id])
        await router.push('/')
    }
    console.log(deletedCustomer, ' tex')

    console.log(detailCustomer, ' dtl');
    const splitted = detailCustomer?.data?.name.split(" ")
    const tag = []
    splitted?.map(text => {
        tag.push(text.replace('.', "").toLowerCase())
    })
    const finalTag = '@' + tag.join("_")
    
    const Field = ({ title, data }) => {
        return (
             <div>
                <span className="text-xl text-orange-500 font-bold">{title}</span>
                <div className={'border h-auto  mt-2'}>
                    <div>{data}</div>
                </div>
            </div>
        )
    }
    return (
        <Frame title={"Detail Customer"}>
            <div className="w-full grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                    <Field title={'Full Name'} data={<div className="py-2 pl-2"> {detailCustomer?.data?.name}</div>} />
                    <Field title={'Account ID'} data={ <div className="py-2 pl-2">{finalTag}</div>} />
                    <Field title={'Email'} data={ <div className="py-2 pl-2">{detailCustomer?.data?.email }</div>} />
                    <Field title={'Gender'} data={<div className="py-2 pl-2">{detailCustomer?.data?.gender}</div>} />
                </div>
                <div className="flex flex-col w-full  justify-between">
                    <Field title={'Status'} data={<div className={`w-full h-fully border py-2 text-center ${detailCustomer?.data?.status === 'active' ? 'border-[#5eba7d] text-[#5eba7d]' : 'border-[#ff7875] text-[#ff7875]'}`}>
                                {detailCustomer?.data?.status}
                            </div>} />
                    <div className="flex-col flex gap-2">
                    <Button onClick={()=> {router.back()}} type={'primary'}>Return To List Customer</Button>
                    <Button onClick={deleteCustomer} type={'primary'} danger>Delete</Button>
                    </div>
                </div>
            </div>
        </Frame>
    )
}

export default DetailCostumer;