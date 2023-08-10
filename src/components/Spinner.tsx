import { SyncLoader } from 'react-spinners'
export default function Spinner() {
  return (
    <div className='h-screen flex items-center justify-center'>
    <SyncLoader color={"#4F46E5"}/>
    </div>
  )
}
