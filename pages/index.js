import 'antd/dist/antd.css';
import Frame from '../components/Frame';
import CustomerList from './customer';

export default function Home() {
  return (
    <Frame title={'List Customer'}>
      <CustomerList/>
    </Frame>
  )
}
