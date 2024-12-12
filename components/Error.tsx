interface ErrorProps {
  message?: string 
}
const Error:React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p>{message}</p>
      <p className='font-bold'>Please Try Again Later</p>
    </div>
  )
}

export default Error