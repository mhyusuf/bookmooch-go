import React from 'react';
import './WelcomeText.scss';

type WelcomeTextProps = {
  back: boolean
}

function WelcomeText({ back }: WelcomeTextProps): JSX.Element {
const welcome = <h3>Welcome {back ? 'back' : ''} to</h3>
  return (
    <div className='landingText'>
      {welcome}
      <h1 className='bookmoochTitle'>BookMooch</h1>
      <h1 className='goTitle'>          
        <svg width="50px" height="11px" viewBox="0 0 69 7">
          <line x1="3" y1="6.4" x2="65.5" y2="6.4" id="Line" strokeLinecap="round" stroke="#689A9B" strokeWidth="6"></line>
        </svg>
        <span className='goText'>Go</span>
        <svg width="65px" height="30px" viewBox="0 0 71 39">
          <path id="Line" d="M40.4120241,1.2505627 L40.5746635,1.33408842 L68.6997635,16.8595916 C70.6893122,17.9578542 70.7683179,20.7594195 68.9105458,21.9849188 L68.7415978,22.0888775 L40.8684897,38.0623664 C39.4309604,38.886184 37.5977765,38.3886724 36.7739589,36.9511431 C35.980653,35.5668556 36.4126126,33.8156786 37.7293444,32.9522299 L37.8851821,32.8566123 L55.823,22.577 L39.3016172,22.7096831 L3.02399923,22.999904 C1.367198,23.0131584 0.0133504053,21.6808005 9.59953922e-05,20.0239992 C-0.0126850427,18.4263695 1.22574745,17.1104402 2.79977436,17.0065987 L2.97600077,17.000096 L39.2536187,16.7098751 L55.773,16.577 L37.6750245,6.58690609 C36.2782221,5.81584893 35.7380096,4.09498266 36.4149094,2.67331719 L36.4984352,2.51067774 C37.2694923,1.11387536 38.9903586,0.573662874 40.4120241,1.2505627 Z" fill="#689A9B" fillRule="nonzero"></path>
        </svg>
      </h1>
    </div>
  );
}

export default WelcomeText;