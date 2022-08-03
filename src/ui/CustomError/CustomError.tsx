
// Styles
import './CustomError.css';

export const CustomError = () => {
  return (
    <div className='customError'>
      <div className='customError_image'>
        <div className="customError_content">
          <h2>404</h2>
          <h3>Not Found</h3>
          <h4>We dont have results </h4>
        </div>
      </div>
      <div className="gradient-opacity" />
    </div>
  )
}
