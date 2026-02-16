import React from 'react';
import Call from '../../png/png-for-footer/Call.svg';
import Envelope from '../../png/png-for-footer/envelope.svg';
import Instagram from '../../png/png-for-footer/instagram.svg';
import Facebook from '../../png/png-for-footer/facebook.svg';
import Twitter from '../../png/png-for-footer/twitter.svg';

const Footer = () => {
    return (
        <div className="h-full w-full bg-gray-50 select-none">
            <div className="mx-auto flex h-auto w-8/10 max-w-[1400px] justify-between py-10">
                <div className="xxs:w-7/10 flex w-8/10 justify-between">
                    <div className="text-gray">
                        <h1 className="text-sm font-bold text-black">
                            Contact
                        </h1>
                        <p className="flex items-center gap-2 text-xs">
                            {' '}
                            <img className="h-3 w-3" src={Envelope} alt="" />
                            Naples@email.com
                        </p>
                        <p className="flex gap-2 text-xs">
                            {' '}
                            <img className="h-3 w-3" src={Call} alt="" />{' '}
                            573-8304-0830-246
                        </p>
                    </div>

                    <div className="text-gray text-xs">
                        <h1 className="font-bold text-black">Info</h1>
                        <p>About us</p>
                        <p>Our stores</p>
                        <p>Food recipes</p>
                        <p>Our chefs</p>
                    </div>

                    <div className="text-gray text-xs">
                        <h1 className="text-md font-bold text-black">Help</h1>
                        <p>Find a tasting </p>
                        <p>Take an order</p>
                        <p>Privacy policy</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="bg-gradient-to-r from-gray-500 to-[#C0C0C2] bg-clip-text text-xl font-bold text-transparent">
                        Naples
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <img className="h-2 w-2" src={Instagram} alt="" />
                        <img className="h-2 w-2" src={Facebook} alt="" />
                        <img className="h-2 w-2" src={Twitter} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
