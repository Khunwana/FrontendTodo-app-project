import FirstComponent  from './FirstComponent';
import SecondComponent  from './SecondComponent';
import ThirdComponent  from './ThirdComponent';
import FourthComponent  from './FourthComponent';
import {FifthComponent}  from './FirstComponent';
import TestingScript from './TestingScript';

export default function ComponentImports()
{
  return (
    <div className='ComponentImports'>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <TestingScript />
    </div>
  )
}